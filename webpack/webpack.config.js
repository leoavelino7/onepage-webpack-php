const merge = require("webpack-merge");

const { commonConfig }  = require("./webpack.common"),
    devConfig           = require("./webpack.dev"),
    prodConfig          = require("./webpack.prod");

module.exports = (env, argv) => {
    console.log("mode", argv.mode);
    return (argv.mode === "development" ? merge(commonConfig, devConfig) : merge(commonConfig, prodConfig));
}