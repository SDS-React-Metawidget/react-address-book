import gulp from 'gulp';
import runSequence from 'run-sequence';

import './clean';
import './webpack';


gulp.task('default', () => {
  runSequence('clean', ['webpack-client', 'webpack-server'], 'webpack-dev-server');
});
