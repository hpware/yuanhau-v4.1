export default defineEventHandler(async (event) => {
  setHeader(event, "Content-Type", "text/text");
  return "This site is still in beta!";
});
