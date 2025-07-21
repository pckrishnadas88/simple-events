import { queue } from './queue.js';

// setInterval(() => {
//   const job = { type: 'print', payload: `Message at ${new Date().toISOString()}` };
//   console.log('Produced:', job);
//   queue.send(job);
// }, 2000);
for (let i = 0; i < 100; i++) {
  const job = {
    type: 'print',
    payload: `Message ${i + 1} at ${new Date().toISOString()}`
  };
  queue.send(job);
}
