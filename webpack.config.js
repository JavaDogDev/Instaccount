const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (env) => ({
  mode: env.production ? 'production' : 'development',

  entry: [
    'babel-polyfill',
    './src/instaccount.js',
  ],

  output: {
    path: path.join(__dirname, 'webclient/build/'),
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
      },
      {
        test: /\.css$/,
        include: [path.resolve(__dirname, '/src')],
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

  plugins: [
    new CopyWebpackPlugin([
      { from: './src/*.html', flatten: true },
      { from: './src/img/*', to: 'img/', flatten: true },
      env.browser === 'chrome'
        ? { from: './src/manifest.chrome.json', to: './build/manifest.json' }
        : null,
      env.browser === 'firefox'
        ? { from: './src/manifest.firefox.json', to: './build/manifest.json' }
        : null
    ]),
  ],

  // Disable stupid "oh no app > 244 KiB" warning
  performance: { hints: false },
});
