// https://github.com/shelljs/shelljs
require('shelljs/global')
env.NODE_ENV = 'testing'

var path = require('path')
var config = require('./project')
var ora = require('ora')
var webpack = require('webpack')
var webpackConfig = require('./webpack.prod.conf')
var buildPath = env.NODE_ENV == "testing" ? '/test' : '/product'

var spinner = ora('building for testing...')
spinner.start()

var assetsPath = path.join(config.build.assetsRoot, buildPath, config.build.assetsSubDirectory)
rm('-rf', assetsPath)
mkdir('-p', assetsPath)
cp('-R', 'static/', assetsPath)

webpack(webpackConfig, function (err, stats) {
  spinner.stop()
  if (err) throw err
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n')
})
