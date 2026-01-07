const { Worker, isMainThread, threadId } = require("worker_threads");
const { cpus } = require("os");

const cpuCount = cpus().length;

console.log("index start", `pid=${process.pid} isMain=${isMainThread} TID=${threadId} cpuCount=${cpuCount}`);

const workers = [];

for (let i = 0; i < cpuCount; i++) {
  workers.push(new Worker("./worker.js"));
}

setTimeout(() => {
  console.log("index end");
}, 5 * 60 * 1000);
