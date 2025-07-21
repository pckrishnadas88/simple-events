import EventEmitter from 'node:events';

class Queue extends EventEmitter {
// queue.js
  constructor() {
    super();
    this.jobs = [];
    this.listeners = [];
    this.concurrency = 1;
    this.running = 0;
  }

  send(job) {
    this.jobs.push(job);
    this.#dispatch();
  }

  receive(handler, options = {}) {
    this.concurrency = options.concurrency || 1;
    this.handler = handler;
    this.#dispatch();
  }

  async #dispatch() {
    while (this.jobs.length > 0 && this.running < this.concurrency) {
      const job = this.jobs.shift();
      this.running++;

      try {
        await this.handler(job);
      } catch (err) {
        console.error('Error processing job:', err);
      }

      this.running--;
      setImmediate(() => this.#dispatch()); // schedule next
    }
  }
}

export const queue = new Queue(); // singleton
