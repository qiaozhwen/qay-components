const path = require("path");

module.exports = {
  stories: ["../packages/**/*.stories.tsx"],
  addons: [],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.less$/,
      use: ["style-loader", "css-loader", "less-loader"],
      include: path.resolve(__dirname, "../")
    });
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve("babel-loader"),
      options: {
        presets: [["react-app", {
          flow: false,
          typescript: true
        }]]
      }
    });
    config.resolve.extensions.push(".ts", ".tsx");
    return config;
  },
  core: {
    builder: "webpack5"
  }
};