import EventEmitter from 'node:events';

class Queue extends EventEmitter {
  constructor() {
    super();
    this.queue = [];
  }
  send(data) {
    this.queue.push(data);
    this.emit('message', data);
  }
  receive(handler) {
    this.on('message', handler)
  }
}
export const queue = new Queue(); // singleton