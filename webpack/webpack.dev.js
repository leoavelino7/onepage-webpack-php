const webpack = require("webpack");

const { PATHS } = require("./webpack.common");

const devConfig = {
    mode: "development",
    output: {
        filename: "[name].[hash].js",
        path: `${PATHS.build}`
    },
    devtool: "inline-source-map",
    devServer: {
        contentBase:  PATHS.build,
        hot: true,
        port: "9090"
    },
    module: {
        rules: [
            {
                test: /\.(s?c|sa)ss$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
							modules: false,
							sourceMap: true
						}
                    },
                    {
                        loader: "sass-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
}

module.exports = devConfig;