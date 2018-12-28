// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const vm = require("vm");
const fs = require("fs");

const CACHE_FILE = 'cache.code';

let options;
if (fs.existsSync(CACHE_FILE)) {
    options = { cachedData: fs.readFileSync(CACHE_FILE) };
} else {
    options = { produceCachedData: true, displayErrors: true };
}

global.define = () => {};

const now = Date.now();
const script = new vm.Script(fs.readFileSync('workbench.main.js').toString('utf8'), options);
script.runInThisContext(options);
console.log((Date.now() - now) + "ms");

if (script.cachedDataProduced) {
    fs.writeFileSync(CACHE_FILE, script.cachedData);
    console.log("Did produce cached data");
} else {
    if (script.cachedDataRejected) {
        console.log("Did not produce cached data. IT WAS REJECTED!");
    } else {
        console.log("Did not produce cached data. Loaded from cache!");
    }
}

