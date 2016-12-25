const path = require('path')

module.exports = {
  debug: true,
  // ^ Setting this to true replaces "process.env.NODE_ENV" in bundle to
  // "development", it's set to "production" otherwise
  entry: ['./index.js'],
  output: {
    bundlePath: 'static/bundle.js',
    sourceMap: true,
    sourceMapPath: 'static/bundle.js.map',
  },
  server: {
    port: 8090,
    hmrPath: '/__sb_pundle_hmr',
    bundlePath: '/bundle.js',
    rootDirectory: path.join(__dirname, 'static'),
    redirectNotFoundToIndex: true,
  },
  presets: [
    'pundle-preset-default',
    'pundle-preset-typescript',
  ],
  components: [
    'pundle-plugin-npm-installer',
  ],
}
