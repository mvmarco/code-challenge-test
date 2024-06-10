const ModuleScopePlugin = require("react-dev-utils/ModuleScopePlugin");
const CopyPlugin = require("copy-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = function override(config, env) {
  // Remove the ModuleScopePlugin
  config.resolve.plugins = config.resolve.plugins.filter(
    (plugin) => !(plugin instanceof ModuleScopePlugin)
  );

  // Add CopyPlugin
  config.plugins.push(
    new CopyPlugin({
      patterns: [
        {
          from: "./public/mockServiceWorker.js",
          to: env === "production" ? "./code-challenge-test" : "./",
        },
      ],
    })
  );

  // Add React Refresh plugin for development environment
  if (env === "development") {
    config.plugins.push(new ReactRefreshWebpackPlugin());

    config.resolve.alias = {
      ...config.resolve.alias,
      "react-refresh/runtime": require.resolve("react-refresh/runtime"),
    };

    config.module.rules.forEach((rule) => {
      if (rule.oneOf) {
        rule.oneOf.forEach((oneOfRule) => {
          if (
            oneOfRule.loader &&
            oneOfRule.loader.includes("babel-loader") &&
            oneOfRule.options &&
            oneOfRule.options.plugins
          ) {
            oneOfRule.options.plugins.push(
              require.resolve("react-refresh/babel")
            );
          }
        });
      }
    });
  }

  return config;
};
