// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const vm = require("vm");
const fs = require("fs");

const CACHE_FILE = `cache.${process.versions.electron}.code`;

let options;
if (fs.existsSync(CACHE_FILE)) {
    options = { cachedData: fs.readFileSync(CACHE_FILE) };
} else {
    options = { produceCachedData: true, displayErrors: true };
}

global.define = () => { };

// Run once to ensure cached data
runScript();
options = { cachedData: fs.readFileSync(CACHE_FILE) };

// Measure N times to reduce spikes
let totalMeasurements = 500;
let totalDuration = 0;
for (let i = 0; i < totalMeasurements; i++) {
    totalDuration += runScript();
}

console.log((totalDuration / totalMeasurements) + 'ms');

function runScript() {
    const now = Date.now();
    const script = new vm.Script(fs.readFileSync('workbench.main.js').toString('utf8'), options);
    script.runInThisContext(options);
    const duration = Date.now() - now;

    if (script.cachedDataProduced) {
        fs.writeFileSync(CACHE_FILE, script.cachedData);
        console.log("Did produce cached data");
    }

    return duration;
}
