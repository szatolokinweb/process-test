const { isMainThread, threadId } = require("worker_threads");

console.log("worker start", `pid=${process.pid} isMain=${isMainThread} TID=${threadId}`);

setTimeout(() => {
  console.log("worker end");
}, 5 * 60 * 1000);
