export default defineEventHandler(async (event) => {
  const body = readRawBody(event);
  const token = event.req.headers.token;
});
