import * as path from 'path';

import HtmlWebpackPlugin from 'html-webpack-plugin';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

import { Configuration } from 'webpack';
import { Configuration as DevServerConfiguration } from 'webpack-dev-server';

const config: Configuration & { devServer?: DevServerConfiguration } = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.(tsx?|ts)$/,
        use: {
          loader: 'babel-loader',
        },
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  devServer: {
    port: 8080,
    historyApiFallback: true,
    hot: true,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    preferAbsolute: true,
    modules: ['node_modules'],
    mainFiles: ['index'],
    plugins: [new TsconfigPathsPlugin()],
  },
};

export default config;
