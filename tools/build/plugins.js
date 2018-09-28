'use strict';

const webpack = require('webpack');
const paths = require('./paths');
const path = require('path');
const HtmlWebpack = require('html-webpack-plugin');
const _ExtractTextPlugin = require('extract-text-webpack-plugin');

// This makes it possible for us to safely use env vars on our code
const DefinePlugin = new webpack.DefinePlugin({
    'process.env.ASSETS': JSON.stringify(paths.ASSETS),
});

// Lets get the Javascripts within the index.html
const HtmlWebpackPlugin = new HtmlWebpack({
    template: path.join(__dirname, '../../src/index.html'),
    filename: 'index.html',
    inject: 'body' // inject at the bottom of the body tag
});

module.exports = {
    DefinePlugin: DefinePlugin,
    HtmlWebpackPlugin: HtmlWebpackPlugin,
};