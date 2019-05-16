const path              = require("path"),
    HtmlWebpackPlugin   = require("html-webpack-plugin");

const PATHS = {
    src: path.join(__dirname, '../app/src'),
    build: path.resolve(__dirname, '../app/view')
}

const PAGES = "/pages/";

const commonConfig = {
    mode: "none",
    entry: {
        bundle: `${PATHS.src}/assets/ts/app.ts`
    },
    module: {
        rules: [
            {
                test: /\.(jp(eg|g)|png|svg)$/,
                use: {
                    loader: "url-loader"
                }
            },
            {
                test: /\.tsx?$/,
                use: [
                    { loader: "ts-loader" }
                ],
                exclude: /(node_modules|bower_components)/,
            }
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "SiteLeo",
            template: `${PATHS.src}${PAGES}/public/index.html`,
            filename: "index.html"
        })
    ]
}

module.exports = {
    PATHS,
    commonConfig
}