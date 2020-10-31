module.exports = {
  chainWebpack: config => {
    config.module
      .rule("xml")
      .test(/\.xml$/)
      .use("html-loader")
      .loader("html-loader")
      .end();
  }
};
