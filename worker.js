const { isMainThread, threadId } = require("worker_threads");

console.log("a", process.pid, isMainThread, threadId);

setTimeout(() => {
  console.log("b");
}, 5 * 60 * 1000);
