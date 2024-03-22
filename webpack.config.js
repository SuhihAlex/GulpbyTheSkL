const app = require('./src/config/app.js');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

const config = {
        mode: app.isProd ? "production" : "development",
        output: {
        filename: 'main.js',
      },
      module: {
        rules: [{
          test: '/\.m?js$/',
          exclude: '/node_modules/',
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env', {
                  targets: "defaults"
                }]
              ]
            }
          }
        }]
      },
      resolve: {
    fallback: {
      fs: false,
      fsevents: false
    }
  },
      plugins: [new NodePolyfillPlugin()],
      devtool: app.isDev ? 'source-map' : false
}

module.exports = config;