const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports ={
    entry: "./packages/index.ts",
    mode: "production",
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: "bundle.js",
      library: "module"
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
