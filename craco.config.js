const path = require('path');

module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      webpackConfig.output.path = path.resolve('docs');
      paths.appBuild = webpackConfig.output.path;
      return webpackConfig;
    },
  },
};
