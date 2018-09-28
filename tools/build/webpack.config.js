'use strict';

const devMode = process.env.NODE_ENV !== 'production'

const webpack = require('webpack');
const path = require('path');
const paths = require('./paths');
const plugins = require('./plugins');
const loaders = require('./loaders');

module.exports = env => {
    return {
        context: path.resolve(__dirname, '../../'),
        entry: {
            app: paths.APP,
        },
        output: {
            filename: devMode ? '[name].js' : '[name].[hash].js',
            path: path.resolve(__dirname, '../../public/dist'),
            publicPath: paths.ASSETS
        },
        plugins: [
            plugins.DefinePlugin,
            plugins.HtmlWebpackPlugin
        ],
        module: {
            rules:  [
                loaders.BabelLoader,
                loaders.CSSLoader
            ]
        },
        resolve: {
            extensions: ['.js', '.jsx'],
        }
    };
};