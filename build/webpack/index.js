import gulp from 'gulp';
import gutil from 'gulp-util';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';

import config from '../../config';
import webpackFactory from './factory';


gulp.task('webpack-server', (done) => {
  webpack(webpackFactory(require(`./config/${process.env.APP_ENV}.server`).default, require('../../config').default), (error, stats) => {
    if (error) throw new gutil.PluginError('webpack-server', error);

    gutil.log('[webpack-server]', stats.toString({
      colors: true,
      chunkModules: false,
    }));

    done();
  });
});

gulp.task('webpack-client', (done) => {
  webpack(webpackFactory(require(`./config/${process.env.APP_ENV}.client`).default, require('../../config').default), (error, stats) => {
    if (error) throw new gutil.PluginError('webpack-client', error);

    gutil.log('[webpack-client]', stats.toString({
      colors: true,
      chunkModules: false,
    }));

    done();
  });
});

gulp.task('webpack-dev-server', () => {
  const webpackConfig = webpackFactory(require(`./config/${process.env.APP_ENV}.client`).default, require('../../config').default);

  const server = new WebpackDevServer(webpack([webpackConfig, webpackFactory(require(`./config/${process.env.APP_ENV}.server`).default, require('../../config').default)]), {
    contentBase: '/',
    hot: true,
    historyApiFallback: true, // TODO: Check if this should be `true`
    proxy: {
      '*': `http://localhost:${config.port + 1}/`,
    },
    staticOptions: {},
    quiet: false,
    noInfo: false,
    lazy: false,
    watchOptions: {
      aggregateTimeout: 300,
      poll: true,
    },
    publicPath: '/dist/',
    stats: {
      colors: true,
      chunkModules: false,
    },
  });

  server.listen(config.port, 'localhost', error => {
    if (error) throw new gutil.PluginError('webpack-dev-server', error);
    gutil.log('[webpack-dev-server]', 'Server is now up');
  });

  require('../../dist/server.js');
});
