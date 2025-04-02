export default defineEventHandler((event) => {
  const query = getQuery(event);
  const nextRoute = query.backuri || "/";
  console.log(nextRoute);

  const clientId = process.env.GITHUB_OAUTH_CLIENT;
  if (!clientId) {
    throw new Error("GitHub OAuth client ID is not configured");
  }

  // Use the absolute URL format for the redirect_uri
  const host = event.node.req.headers.host;
  const protocol = process.env.NODE_ENV === "production" ? "https" : "http";
  const redirectUri = `${protocol}://${host}/api/auth/callback/github?nextRoute=${nextRoute}`;

  console.log("Using redirect URI for GitHub OAuth:", redirectUri);

  // Build the OAuth authorization URL - note we're not encoding the URI components separately
  const authUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=read:user,user&state=${encodeURIComponent(nextRoute)}`;

  // Redirect to GitHub
  return sendRedirect(event, authUrl);
});
