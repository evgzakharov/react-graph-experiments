const plugins = require('./plugins');

const BabelLoader = {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: {
        loader: "babel-loader"
    }
};

const CSSLoader = {
    test: /\.css$/,
    use: [ 'style-loader', 'postcss-loader' ]
};

module.exports = {
    BabelLoader: BabelLoader,
    CSSLoader: CSSLoader
}