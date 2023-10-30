const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  pwa: {
    workboxPluginMode: "GenerateSW",
    name: "Spells Tome",
    themeColor: "#000000",
    msTileColor: "#00000000",
  },

  publicPath: process.env.NODE_ENV === "production" ? "/SpellTome/" : "/",
  transpileDependencies: true,

  pluginOptions: {
    vuetify: {
      // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
    },
  },
});
