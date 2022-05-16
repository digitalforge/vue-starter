module.exports = {
  css: {
    extract: false,
    loaderOptions: {
      scss: {
        prependData: `
          @import "@/assets/sass/main.scss";
        `,
      },
    },
  },
}
