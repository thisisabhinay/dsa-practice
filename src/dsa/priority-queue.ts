import queue from "./queue"

/**
 * Creates a new priority queue instance.
 * @returns The priority queue object with methods to interact with the queue.
 */
export default function createPriorityQueue() {
  const highPriorityQueue = queue(); // Create a queue for high priority items
  const lowPriorityQueue = queue();  // Create a queue for low priority items

  return {
    /**
     * Enqueues an item into the priority queue if flagged.
     * @param item The item to be enqueued.
     * @param isHighPriority Optional flag indicating if the item has high priority (default: false).
     */
    enqueue(item: any, isHighPriority = false) {
      const queue = isHighPriority
        ? highPriorityQueue
        : lowPriorityQueue;

      queue.enqueue(item);
    },

    /**
     * Dequeues and returns the item with the highest priority from the queue.
     * If the high priority queue is empty, it dequeues from the low priority queue.
     * @returns The dequeued item.
     */
    dequeue() {
      if (highPriorityQueue.isEmpty())
        return lowPriorityQueue.dequeue();

      return highPriorityQueue.dequeue();
    },

    /**
     * Returns the item with the highest priority from the queue without removing it.
     * If the high priority queue is empty, it peeks from the low priority queue.
     * @returns The peeked item.
     */
    peek() {
      if (highPriorityQueue.isEmpty())
        return lowPriorityQueue.peek();

      return highPriorityQueue.peek();
    },

    /**
     * Checks if the priority queue is empty.
     * @returns True if both high and low priority queues are empty, false otherwise.
     */
    isEmpty() {
      return highPriorityQueue.isEmpty() && lowPriorityQueue.isEmpty();
    },

    /**
     * Returns the total number of items in the priority queue.
     */
    get length() {
      return highPriorityQueue.length + lowPriorityQueue.length;
    }
  };
}

// Example usage of the priority queue
const pq = createPriorityQueue();

pq.enqueue("Task 1", true);
pq.enqueue("Task 2", false);
pq.enqueue("Task 3", true);
pq.enqueue("Task 4", false);

console.log(pq.dequeue()); // Output: "Task 1"
console.log(pq.dequeue()); // Output: "Task 3"
console.log(pq.peek());    // Output: "Task 2"
console.log(pq.dequeue()); // Output: "Task 2"
console.log(pq.dequeue()); // Output: "Task 4"

console.log(pq.isEmpty()); // Output: true
console.log(pq.length);    // Output: 0 