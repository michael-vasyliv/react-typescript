/* eslint-disable import/no-extraneous-dependencies */
const { merge } = require('webpack-merge');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const common = require('./webpack-common.config');

module.exports = merge(common, {
    mode: 'production',
    bail: true,
    output: {
        filename: '[name].[contenthash:8].js',
        chunkFilename: '[name].[contenthash:8].chunk.js',
        path: path.resolve(__dirname, 'build'),
        publicPath: '/'
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    parse: {
                        ecma: 8
                    },
                    compress: {
                        ecma: 5,
                        warnings: false,
                        comparisons: false,
                        inline: 2
                    },
                    mangle: {
                        safari10: true
                    },
                    output: {
                        ecma: 5,
                        comments: false,
                        ascii_only: true
                    }
                }
            }),
            new OptimizeCSSAssetsPlugin({
                cssProcessorPluginOptions: {
                    preset: ['default', { minifyFontValues: { removeQuotes: false } }]
                }
            })
        ],
        splitChunks: {
            chunks: 'all',
            name: false
        },
        runtimeChunk: {
            name: (entrypoint) => `runtime-${entrypoint.name}`
        }
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash:8].css',
            chunkFilename: '[id].[contenthash:8].chunk.css'
        })
    ]
});
