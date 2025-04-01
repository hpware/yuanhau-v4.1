export default defineEventHandler((event) => {
  const uri = new URL(
    event.node.req.url!,
    `http://${event.node.req.headers.host}`,
  );
  const nextRoute = uri.searchParams.get("nextRoute");
  const clientId = process.env.GITHUB_OAUTH_CLIENT;
  const redirectUri = `http://${event.node.req.headers.host}/api/auth/callback/github?nextRoute=${nextRoute}`;
  const scope = "read:user, user,";
  const Oauth = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}`;
  // Redirect to Github
  return sendRedirect(event, Oauth);
});
