const path = require('path');
const isDev = process.env.NODE_ENV === 'development';
const webpack = require('webpack');
const HTMLPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const config = {
  mode: isDev ? 'development' : 'production',
  target: 'web',
  entry: {
    index: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.(jpg|jpeg|JPG|png|PNG|gif|GIF|woff|svg|ttf|eot)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'images/[name].[ext]'
          }
        }
      },
      {
        test: /\.html$/,
        loader: 'html-withimg-loader'
      },
      {
        test: /\.pdf$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'doc/[name].[ext]'
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/'
      }

    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HTMLPlugin({
      template: './src/index.html'
    })
  ]
};


if(isDev){
  config.devtool = '#cheap-module-eval-source-map';
  config.devServer = {
    port: 8000,
    host: '0.0.0.0',
    overlay: {
      errors: true
    },
    hot: true
  };
  config.plugins.push(
    new webpack.HotModuleReplacementPlugin,
    new webpack.NoEmitOnErrorsPlugin
  );
}

module.exports = config;