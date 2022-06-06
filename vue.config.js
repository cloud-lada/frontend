const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: false,
  devServer: {
    proxy: {
      "^/api": {
        target: "https://lada.dsb.dev",
        ws: false,
      },
    },
  },
});
