import { getQuery, setCookie, sendRedirect } from "h3";

export default defineEventHandler(async (event) => {
  try {
    // Get the authorization code from the query parameters
    const query = getQuery(event);
    const code = query.code as string;
    const nextRoute = (query.nextRoute as string) || "/";
    console.log(nextRoute);

    if (!code) {
      throw new Error("No code provided");
    }

    // Exchange the code for an access token
    const clientId = process.env.GITHUB_OAUTH_CLIENT;
    const clientSecret = process.env.GITHUB_OAUTH_SECRET;

    if (!clientId || !clientSecret) {
      throw new Error("Missing GitHub OAuth credentials");
    }

    // Get the host for the redirect URI
    const host = event.node.req.headers.host;
    const protocol = process.env.NODE_ENV === "production" ? "https" : "http";
    const redirectUri = `${protocol}://${host}/api/auth/callback/github`;

    console.log("Exchanging code for token with redirect URI:", redirectUri);

    // Make the request to GitHub for the access token
    const tokenResponse = await fetch(
      "https://github.com/login/oauth/access_token",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          client_id: clientId,
          client_secret: clientSecret,
          code,
          redirect_uri: redirectUri,
        }),
      },
    );

    // Debug the token response
    const tokenData = await tokenResponse.json();
    console.log("Token response:", JSON.stringify(tokenData));

    if (!tokenResponse.ok || tokenData.error) {
      console.error(
        "GitHub token error:",
        tokenData.error_description || tokenData.error || "Unknown error",
      );
      throw new Error(
        tokenData.error_description || "Failed to obtain access token",
      );
    }

    const accessToken = tokenData.access_token;

    if (!accessToken) {
      console.error("No access token in response:", tokenData);
      throw new Error("No access token received");
    }

    // Get user info from GitHub
    const userResponse = await fetch("https://api.github.com/user", {
      headers: {
        Authorization: `token ${accessToken}`, // Changed from Bearer to token
        "User-Agent": "YuanHau-v4.1",
        Accept: "application/json",
      },
    });

    if (!userResponse.ok) {
      const userErrorText = await userResponse.text();
      console.error("GitHub user API error:", userErrorText);
      throw new Error("Failed to fetch user information");
    }

    const userData = await userResponse.json();
    console.log("User data retrieved successfully");

    // Store access token and user info in cookies
    setCookie(event, "github_access_token", accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: "/",
    });

    // Store minimal user info (not the token) for client-side use
    setCookie(event, "github_user_id", userData.id, {
      httpOnly: false, // Allow client-side access
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: "/",
    });
    setCookie(event, "github_user_login", userData.login, {
      httpOnly: false, // Allow client-side access
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: "/",
    });
    setCookie(event, "github_user_name", userData.name, {
      httpOnly: false, // Allow client-side access
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: "/",
    });
    setCookie(event, "github_user_avatar", userData.avatar_url, {
      httpOnly: false, // Allow client-side access
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: "/",
    });

    // Redirect to the next route or home
    return sendRedirect(event, nextRoute !== "null" ? nextRoute : "/");
  } catch (error) {
    console.error("GitHub OAuth error:", error);

    // Return an error page instead of redirecting
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: error.message || "Authentication failed",
      }),
    };
  }
});
