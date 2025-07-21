import { queue } from './queue.js';

queue.receive(async (job) => {
  console.log('Consumed:', job);
  
  // Simulate processing
  await new Promise(res => setTimeout(res, 3000));
  console.log('Processed:', job.payload);
  
});

