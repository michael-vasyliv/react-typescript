const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {
    const devMode = env.NODE_ENV !== 'production';

    return {
        mode: env.NODE_ENV,
        context: `${__dirname}/src`,
        entry: './index.tsx',
        target: 'web',
        devtool: 'inline-source-map',
        devServer: {
            contentBase: './built',
            hot: true,
            compress: true,
            port: 4000,
            host: '0.0.0.0',
            historyApiFallback: true
        },
        output: {
            filename: '[name].bundle.js',
            path: path.resolve(__dirname, 'built'),
            publicPath: '/'
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.jsx'],
            plugins: [new TsconfigPathsPlugin()]
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: {
                        loader: 'babel-loader'
                    },
                    exclude: [/node_modules/]
                },
                {
                    test: /\.(sa|sc|c)ss$/,
                    use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
                },
                {
                    test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                    use: {
                        loader: 'url-loader'
                    }
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.join(__dirname, 'src', 'index.html')
            }),
            new webpack.HotModuleReplacementPlugin(),
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify(env.NODE_ENV)
            }),
            new MiniCssExtractPlugin({
                filename: devMode ? '[name].css' : '[name].[contenthash].css',
                chunkFilename: devMode ? '[id].css' : '[id].[contenthash].css'
            })
        ]
    };
};
