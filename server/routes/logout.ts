export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const path = query.uri;
  const token = getCookie(event, "github_access_token");
  const protocol = process.env.NODE_ENV === "production" ? "https" : "http";
  const location = `${protocol}://${event.node.req.headers.host}/${path}?navbar=active`;
  if (token) {
    setCookie(event, "github_access_token", "");
    setCookie(event, "github_user_id", "");
    setCookie(event, "github_user_login", "");
    setCookie(event, "github_user_name", "");
    setCookie(event, "github_user_avatar", "");
  }
  return sendRedirect(event, location, 302);
});
