const MiniCssExtractPlugin  = require("mini-css-extract-plugin"),
    OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin"),
    glob                    = require("glob"),
    PurifyCssPlugin         = require("purifycss-webpack"),
    UglifyJsPlugin          = require("uglifyjs-webpack-plugin"),
    ImageminPlugin          = require("imagemin-webpack-plugin").default;

const { PATHS } = require("./webpack.common");

const prodConfig = {
    mode: "production",
    output: {
        filename: 'js/[name].[hash].js',
        path: `${PATHS.build}`,
        publicPath: "./view/"
    },
    optimization: {
        minimizer: [
            new OptimizeCssAssetsPlugin(),
            new UglifyJsPlugin()
        ]
    },
    module: {
        rules: [
            {
                test: /\.(s?c|sa)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env"]
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new ImageminPlugin({
            test: /\.(jpe?g|png|gif|svg)$/i,
            pngquant: {
                quality: '50-100'
            },
            jpegtran: {
                progressive: true
            },
            externalImages: {
                context: `${PATHS.src}/assets/images`,
                sources: glob.sync(`${PATHS.src}/assets/images/**/*.{png,jpg,jpeg}`),
                destination: `${PATHS.build}/images`,
                fileName: filePath => {
                    return filePath.replace('png', 'webp')
                }
              }
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name].css",
            chunkFilename: "[id].css"
        }),
        new PurifyCssPlugin({
            paths: glob.sync(`${PATHS.src}/**/**/*.{html,ts}`)
        })
    ]
}

module.exports = prodConfig;