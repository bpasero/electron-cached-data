
const path = require('path');
const fs = require('fs');

const amdLoader = require('./loader.js');
// const amdRequire = amdLoader.require;
// const amdDefine = amdLoader.require.define;
// const nodeRequire = amdLoader.require.nodeRequire;

const uriFromPath = function (_path) {
    const path = require('path');

    let pathName = path.resolve(_path).replace(/\\/g, '/');
    if (pathName.length > 0 && pathName.charAt(0) !== '/') {
        pathName = '/' + pathName;
    }

    return encodeURI('file://' + pathName).replace(/#/g, '%23');
};

// const enableASARSupport = function (nodeModulesPath) {
//     const Module = require('module');
//     const path = require('path');

//     let NODE_MODULES_PATH = nodeModulesPath;
//     if (!NODE_MODULES_PATH) {
//         NODE_MODULES_PATH = path.join(__dirname, '../node_modules');
//     }

//     const NODE_MODULES_ASAR_PATH = NODE_MODULES_PATH + '.asar';

//     const originalResolveLookupPaths = Module._resolveLookupPaths;

//     Module._resolveLookupPaths = function (request, parent, newReturn) {
//         const result = originalResolveLookupPaths(request, parent, newReturn);

//         const paths = newReturn ? result : result[1];
//         for (let i = 0, len = paths.length; i < len; i++) {
//             if (paths[i] === NODE_MODULES_PATH) {
//                 paths.splice(i, 0, NODE_MODULES_ASAR_PATH);
//                 break;
//             }
//         }

//         return result;
//     };
// };
// enableASARSupport(path.join(__dirname, 'node_modules'));

// window['nodeRequire'] = nodeRequire;
// window['require'] = amdRequire;

// window['MonacoEnvironment'] = {};

const modulePaths = ['vs/workbench/node/extensionHostProcess'];

const cacheDir = path.join(__dirname, 'cache');
if (!fs.existsSync(cacheDir)) {
    fs.mkdirSync(cacheDir);
}

const loaderConfig = {
    baseUrl: uriFromPath(path.join(__dirname, 'out')),
    catchError: true,
    nodeRequire: require,
    nodeMain: __filename,
    nodeCachedData: {
        path: cacheDir,
        seed: modulePaths.join('')
    }
};

amdLoader.config(loaderConfig);

const now = Date.now();
amdLoader(modulePaths, result => {
    console.log(Date.now() - now);
});