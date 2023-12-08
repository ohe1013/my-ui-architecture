import { RpcWorker } from "./rpc-worker.js";

const worker = new RpcWorker("worker.js");

Promise.allSettled([
    worker.exec("operateRandom", 1_000_000),
    worker.exec("fibonacci", 1_000),
    worker.exec("bad"),
]).then(([operateRandom, fibonacci, bad]) => {
    console.log(operateRandom);
    console.log(fibonacci);
    console.log(bad);
});
