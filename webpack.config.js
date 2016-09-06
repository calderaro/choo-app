var devConfig = require("./configs/webpack.config.dev");
//var buildConfig = require("./configs/webpack.config.prod");

const TARGET = process.env.TARGET;

if (TARGET === "build") {
  module.exports = buildConfig;
} else {
  module.exports = devConfig;
}
