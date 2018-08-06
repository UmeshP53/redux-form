const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
});

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(css|scss)$/, // s?css
                use: [
                    "style-loader", // creates style nodes from JS strings
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS
                ]
            }
        ],
    },
    devServer: {
        host: "localhost",
        port: 5050
    },
    plugins: [htmlPlugin]
};
