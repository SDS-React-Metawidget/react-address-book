import appModulePath from 'app-module-path';
import hook from 'node-hook';
import path from 'path';


// Allow magic imports from inside `../src/`
appModulePath.addPath(path.resolve(__dirname, '..', 'src'));
// Allow magic imports from inside `../test/`
appModulePath.addPath(__dirname);

// Stub webpack loaded files so Node doesn't explode
hook.hook('.png', (_, name) => `module.exports = '${name}';`);
hook.hook('.styl', () => 'module.exports = {};');
