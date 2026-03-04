const { defineConfig } = require("@vue/cli-service");
const { VuetifyPlugin } = require("webpack-plugin-vuetify");

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      new VuetifyPlugin({
        styles: { configFile: "src/styles/variables.scss" },
      }),
    ],
  },
});
