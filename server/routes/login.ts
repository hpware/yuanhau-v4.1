export default defineEventHandler((event) => {
  const url = new URL(
    event.node.req.url!,
    `http://${event.node.req.headers.host}`,
  );
  const getBackURI = url.searchParams.get("uri");
  console.log(getBackURI);
  return sendRedirect(event, `/api/auth/github?backuri=${getBackURI}`, 302);
});
