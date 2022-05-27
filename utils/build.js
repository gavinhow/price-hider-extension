// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';
process.env.ASSET_PATH = '/';

var webpack = require('webpack');
var configV2 = require('../webpackV2.config');
var configV3 = require('../webpackV3.config');
const yargs = require('yargs');

const argv = yargs.argv;

let config;

if (argv.v3) {
  config = configV3;
  console.log("config v3")
} else {
  config = configV2;
}


delete config.chromeExtensionBoilerplate;

config.mode = 'production';

webpack(config, function (err) {
  if (err) throw err;
});
