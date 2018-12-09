const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (env) => ({
  mode: env && env.production ? 'production' : 'development',

  entry: {
    'content-script': ['babel-polyfill', './src/content-script/content-script.js'],
    'popup': ['babel-polyfill', './src/popup/popup.js']
  },

  output: {
    path: path.join(__dirname, 'build/'),
    filename: '[name].bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        include: [path.resolve(__dirname, '/src')],
        query: { presets: ['env', 'stage-2'] },
        resolve: { extensions: ['.js'] },
        loader: 'babel-loader',
      }
    ],
  },

  plugins: [
    new CopyWebpackPlugin([
      { from: './src/*/*.html', flatten: true },
      { from: './src/*/*.css', flatten: true },
      { from: './src/img/*', to: 'img/', flatten: true },
      { from: './src/manifest.json', to: './manifest.json' }
    ]),
  ],

  // Disable stupid "oh no app > 244 KiB" warning
  performance: { hints: false },
});
