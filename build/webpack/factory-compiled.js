'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = webpackFactory;

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _lodash = require('lodash');

var _extractTextWebpackPlugin = require('extract-text-webpack-plugin');

var _extractTextWebpackPlugin2 = _interopRequireDefault(_extractTextWebpackPlugin);

var _webpack = require('webpack');

var _webpackNodeExternals = require('webpack-node-externals');

var _webpackNodeExternals2 = _interopRequireDefault(_webpackNodeExternals);

var _WriteManifestPlugin = require('./plugins/WriteManifestPlugin');

var _WriteManifestPlugin2 = _interopRequireDefault(_WriteManifestPlugin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hashType = function hashType(config) {
  return config.optimise ? 'chunkhash' : 'hash';
};

var stylusLoader = function stylusLoader(config) {
  var cssLoaderQuery = 'modules&localIdentName=[path][name]--[local]--[hash:base64:5]';
  if (config.type === 'server') {
    return 'css/locals?' + cssLoaderQuery + '!stylus';
  }
  return config.optimise ? _extractTextWebpackPlugin2.default.extract('css?' + cssLoaderQuery + '!stylus') : 'style?singleton!css?' + cssLoaderQuery + '!stylus';
};

var cssLoader = function cssLoader(config) {
  if (config.type === 'server') {
    return 'css';
  }
  return config.optimise ? _extractTextWebpackPlugin2.default.extract('css') : 'style?singleton!css';
};

function webpackFactory(config, appConfig) {
  return {
    stats: {
      children: false
    },

    entry: {
      client: {
        bundle: [config.hotReload && 'webpack-dev-server/client?/', config.hotReload && 'webpack/hot/only-dev-server', 'babel-polyfill', _path2.default.resolve(__dirname, '..', '..', 'src', 'client', 'index.js')].filter(_lodash.identity)
      },
      server: {
        server: ['babel-polyfill', _path2.default.resolve(__dirname, '..', '..', 'src', 'server', 'index.js')]
      }
    }[config.type],

    output: {
      filename: config.type === 'server' ? '[name].js' : '[name]-[' + hashType(config) + ':6].js',
      path: _path2.default.resolve(__dirname, '..', '..', 'dist'),
      publicPath: 'http://localhost:' + appConfig.port + '/dist/'
    },

    target: { client: 'web', server: 'node' }[config.type],

    externals: [config.type === 'server' && (0, _webpackNodeExternals2.default)({
      whitelist: ['bootstrap/dist/css/bootstrap.css', 'bootstrap/dist/css/bootstrap-theme.css']
    })].filter(_lodash.identity),

    devtool: config.debug || config.type === 'server' ? 'cheap-module-inline-source-map' : 'hidden-source-map',

    debug: true,

    module: {
      loaders: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [config.hotReload && 'react-hot', 'babel'].filter(_lodash.identity)
      }, {
        test: /\.json$/,
        loader: 'json'
      }, {
        test: /\.styl$/,
        loader: stylusLoader(config)
      }, {
        test: /\.css$/,
        loader: cssLoader(config)
      }, {
        test: /\.(?:png|svg|woff2?|eot|ttf)$/,
        loader: 'url?limit=5120&name=[name]-[hash:6].[ext]'
      }]
    },

    plugins: [new _webpack.DefinePlugin({
      __CLIENT__: config.type === 'client',
      __DEV__: config.debug,
      __DEVELOPMENT__: config.debug,
      __SERVER__: config.type === 'server',
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }), new _webpack.NoErrorsPlugin(), config.hotReload && new _webpack.HotModuleReplacementPlugin(), config.type === 'client' && config.optimise && new _extractTextWebpackPlugin2.default('[name]-[contenthash:6].css', {
      allChunks: true
    }), config.type === 'server' && config.debug && new _webpack.BannerPlugin('require("source-map-support").install();', {
      raw: true,
      entryOnly: false
    }), config.optimise && new _webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }), config.type === 'client' && new _WriteManifestPlugin2.default(config)].filter(_lodash.identity),

    resolve: {
      alias: {
        root: _path2.default.resolve(__dirname, '..', '..', 'src')
      },
      extensions: ['', '.json', '.js'],
      modulesDirectories: ['src', 'node_modules']
    }
  };
}

//# sourceMappingURL=factory-compiled.js.map