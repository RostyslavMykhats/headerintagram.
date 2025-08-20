module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "react-native-reanimated/plugin" // для SDK52 повертаємо цей плагін
    ],
  };
};
