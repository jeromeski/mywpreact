const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.[contenthash].js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '/static/'
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(js|js?x)$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: [
              'babel-plugin-transform-class-properties',
              '@babel/plugin-proposal-class-properties'
            ]
          }
        }
      },
      {
        // checks if the filename contains png or jpg
        test: /\.(jpe?g|png|jpg|svg)$/i,
        use: ['file-loader']
      },
      {
        // checks if the filename contains css
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        // checks if the filename contains scss
        test: /\.scss$/,
        use: [
          // last will convert js rep to style text inside html page and put css into it
          MiniCssExtractPlugin.loader,
          // 2nd convert css to js representation
          'css-loader',
          // first convert sass to css
          'sass-loader'
        ]
      },
      {
        // Exposes jQuery for use outside Webpack build
        test: require.resolve('jquery'),
        use: [
          {
            loader: 'expose-loader',
            options: 'jQuery'
          },
          {
            loader: 'expose-loader',
            options: '$'
          }
        ]
      },
      {
        test: /\.(woff2|woff|ttf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(hbs)$/,
        use: ['handlebars-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.[contenthash].css'
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Hello World',
      template: 'src/index.hbs',
      description: 'some description'
    })
  ]
};
