interface Progress {
  progress: {
    js: number;
    server: number;
    py: number;
  };
}

export default defineEventHandler(async (event) => {
  return {
    js: 32,
    server: 2,
    py: 100,
  };
});
