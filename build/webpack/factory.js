import path from 'path';
import { identity } from 'lodash';
import { BannerPlugin, DefinePlugin, HotModuleReplacementPlugin, optimize } from 'webpack';
import nodeExternals from 'webpack-node-externals';
import { StatsWriterPlugin } from 'webpack-stats-plugin';


export default function webpackFactory(config, appConfig) {
  return {
    stats: {
      children: false,
    },

    entry: {
      client: {
        bundle: [
          config.hotReload && 'webpack-dev-server/client?/',
          config.hotReload && 'webpack/hot/dev-server',
          path.resolve(__dirname, '..', '..', 'src', 'client', 'index.js'),
        ].filter(identity),
      },
      server: { server: [path.resolve(__dirname, '..', '..', 'src', 'server', 'index.js')] },
    }[config.type],

    output: {
      filename: config.type === 'server'
        ? '[name].js'
        : `[name]-[${config.debug ? 'hash' : 'chunkhash'}:6].js`,
      path: path.resolve(__dirname, '..', '..', 'dist'),
      publicPath: `http://localhost:${appConfig.port}/dist`,
    },

    target: { client: 'web', server: 'node' }[config.type],

    externals: [config.type === 'server' && nodeExternals()].filter(identity),

    devtool: 'source-map', // config.debug ? 'cheap-module-inline-source-map' : 'hidden-source-map',

    debug: true,

    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loaders: [config.hotReload && 'react-hot', 'babel'].filter(identity),
        },
        {
          test: /\.json$/,
          loader: 'json',
        },
      ],
    },

    plugins: [
      config.hotReload && new HotModuleReplacementPlugin(),
      config.type === 'server' && config.debug && new BannerPlugin('require("source-map-support").install();', {
        raw: true,
        entryOnly: false,
      }),
      new DefinePlugin({
        __CLIENT__: config.type === 'client',
        __DEV__: config.debug,
        __DEVELOPMENT__: config.debug,
        __SERVER__: config.type === 'server',
        'process.env': {
          NODE_ENV: JSON.stringify('production'),
        },
      }),
      config.optimise && new optimize.UglifyJsPlugin(),
      config.type === 'client' && new StatsWriterPlugin({
        filename: 'webpackStats.json',
        transform: data => {
          const js = {};
          const css = {};
          Object.entries(data.assetsByChunkName).forEach(([entry, files]) => {
            (Array.isArray(files) ? files : [files]).forEach(file => {
              if (file.endsWith('.js')) js[entry] = `/dist/${file}`;
              if (file.endsWith('.css')) css[entry] = `/dist/${file}`;
            });
          });
          return JSON.stringify({
            js,
            css,
          }, null, 2);
        },
      }),
    ].filter(identity),

    resolve: {
      alias: {
        root: path.resolve(__dirname, '..', '..', 'src'),
      },
      extensions: ['', '.json', '.js'],
      modulesDirectories: [
        'src',
        'node_modules',
      ],
    },
  };
}
