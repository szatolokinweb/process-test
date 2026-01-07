const { Worker, isMainThread, threadId } = require("worker_threads");
const { cpus } = require("os");

console.log("c", process.pid, isMainThread, threadId);

const workers = [];

for (let i = 0; i < cpus().length * 2; i++) {
  workers.push(new Worker("./worker.js"));
}

setTimeout(() => {
  console.log("d");
}, 5 * 60 * 1000);
