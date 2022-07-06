const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  lineOsSave: false,
  devServer: {
    open: true,
  },
});
