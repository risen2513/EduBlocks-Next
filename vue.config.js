/* eslint-disable @typescript-eslint/no-var-requires */
const { GenerateSW } = require("workbox-webpack-plugin");

module.exports = {
  publicPath: process.env.NODE_ENV === "development" ? "/" : "/",
  configureWebpack: {
    plugins: [
      new GenerateSW({
        maximumFileSizeToCacheInBytes: 1000000000
      })
    ]
  },
  chainWebpack: config => {
    config.module
      .rule("xml")
      .test(/\.xml$/)
      .use("html-loader")
      .loader("html-loader")
      .end();
  }
};
