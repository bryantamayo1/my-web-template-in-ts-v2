const path = require('path');

/** @type {import('webpack').Configuration} */
module.exports = {
  entry: "./src/index.ts",
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@src': path.resolve(__dirname, '../src'),
    }
  },
}