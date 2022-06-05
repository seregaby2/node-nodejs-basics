import { Worker } from "worker_threads";
import { cpus } from "os";

export const performCalculations = async () => {
  // Write your code here
  const calculateNewData = (workerData) => {
    return new Promise((resolve, reject) => {
      const worker = new Worker("./worker.js", { workerData });
      worker.on("message", (message) => {
        resolve(message);
      });
      worker.on("error", () => {
        reject({ data: null, status: "error" });
      });
    });
  };
  
  try {
      const array = []
    for (let i = 0; i < cpus().length; i++) {
         array.push(i+10)   
    }
    const result = await Promise.all(
        array.map(e=>calculateNewData(e))
    );
    return result;
  } catch (e) {
    console.error("worker error", e);
  }
  
};

performCalculations().then(data=>console.log(data))