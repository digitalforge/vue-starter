module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `
          @import "@/assets/sass/main.scss";
        `,
      },
    },
  },
}
