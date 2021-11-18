const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports ={
    entry: "./examples/App.tsx",
    mode: "development",
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: "bundle.js"
    },
    module: {
        rules: [
            { test: /\.js?$/, use: 'babel-loader' },
            { test: /\.tsx?$/, loader: "ts-loader" },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ]
    },
    devServer: {
        compress: true,
        port: 9999,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "qz html",
            template: "./index.html"
        })
    ],
    resolve: {
        extensions: ['.js','.jsx','.ts','.tsx']
    }
}