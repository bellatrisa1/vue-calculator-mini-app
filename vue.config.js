const { defineConfig } = require("@vue/cli-service");
const webpack = require("webpack");

module.exports = defineConfig({
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        __VUE_OPTIONS_API__: true, // Включает Options API (по умолчанию true)
        __VUE_PROD_DEVTOOLS__: false, // Отключает DevTools в production
      }),
    ],
  },
});
