import { queue } from './queue.js';

// queue.receive(async (job) => {
//   console.log('Consumed:', job);
  
//   // Simulate processing
//   await new Promise(res => setTimeout(res, 1000));
//   console.log('Processed:', job.payload);
  
// });

let processed = 0;
const start = Date.now();

queue.receive(async (job) => {
  // Simulate work
  await new Promise((res) => setTimeout(res, 10)); // adjust for real workload
  processed++;

  if (processed % 1000 === 0) {
    console.log(`✅ Processed ${processed}`);
  }

  if (processed === 100000) {
    const duration = ((Date.now() - start) / 1000).toFixed(2);
    console.log(`🎉 All ${processed} jobs processed in ${duration}s`);
  }
}, { concurrency: 100 }); // <- Concurrency here