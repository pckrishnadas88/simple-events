# 🪄 Lightweight In-Memory Job Queue in Node.js

A simple concurrency-controlled, in-memory queue using `EventEmitter` — ideal for lightweight job processing, prototyping async flows, and understanding queue fundamentals.

---

## 📦 Features

- ✅ Job queueing with `.send(job)`
- ✅ Register a worker using `.receive(handler, { concurrency })`
- ✅ Concurrency control (default: 1)
- ✅ Singleton queue instance
- ✅ Built using native Node.js APIs (no dependencies)

---

## 📁 File Structure

queue.js # Queue class
worker.js # Example consumer
producer.js # Example job sender