interface Progress {
  progress: {
    js: number;
    server: number;
    py: number;
  };
}

export default defineEventHandler(async (event) => {
  return {
    0: {
      lang: "js",
      icon: "filetype-js",
      progress: "50",
    },
    1: {
      lang: "server",
      icon: "server",
      progress: "60",
    },
    2: {
      lang: "python",
      icon: "filetype-py",
      progress: "4",
    },
  };
});
