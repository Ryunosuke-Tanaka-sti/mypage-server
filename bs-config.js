module.exports = {
  files: ["./**/**/*.html", "./**/**/*.css", "./**/**/*.js"],
  server: {
    baseDir: "httpdocs",
  },
  startPath: "/public/index.html",
  proxy: false,
  port: 3000,
  xip: false,
  notify: true,
  minify: true,
};
