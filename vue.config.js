module.exports = {
  lintOnSave: false,
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      return [
        {
          ...(args[0] ? args[0] : {}),
          title: "Stock Trader",
        },
      ];
    });
  },
};
