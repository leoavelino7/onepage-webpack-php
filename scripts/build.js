const shell = require("shelljs");

shell.exec('webpack --config ./webpack/webpack.config.js --mode production');
shell.exec('gulp createLog');
