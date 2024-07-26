/**
 * Creates a new queue instance.
 * @returns An object with methods to interact with the queue.
 */
function createQueue() {
  const queue = []

  return {
    /**
     * Adds an item to the back of the queue.
     * @param item The item to be added to the queue.
     */
    enqueue(item: any) {
      queue.push(item)
    },

    /**
     * Removes and returns the item at the front of the queue.
     * @returns The item at the front of the queue.
     */
    dequeue() {
      return queue.shift()
    },

    /**
     * Returns the item at the front of the queue without removing it.
     * @returns The item at the front of the queue.
     */
    peek() {
      return queue[0]
    },

    /**
     * Checks if the queue is empty.
     * @returns `true` if the queue is empty, `false` otherwise.
     */
    isEmpty() {
      return queue.length === 0
    },

    /**
     * Gets the current length of the queue.
     * @returns The number of items in the queue.
     */
    get length() {
      return queue.length
    }
  }
}

// Example usage of the queue
const example = createQueue()
example.enqueue("Envision the moon landing")
example.enqueue("Create rocket blueprint")
example.enqueue("Build rocket")
example.enqueue("Launch the rocket and land on the moon")

console.log(example.length) // Output: 4
console.log(example.peek()) // Output: "Envision the moon landing"
console.log(example.dequeue()) // Output: "Envision the moon landing"

console.log(example.length) // Output: 3
console.log(example.peek()) // Output: "Create rocket blueprint"
console.log(example.dequeue()) // Output: "Create rocket blueprint"

console.log(example.length) // Output: 2
console.log(example.peek()) // Output: "Build rocket"
console.log(example.dequeue()) // Output: "Build rocket"

console.log(example.length) // Output: 1
console.log(example.peek()) // Output: "Launch the rocket and land on the moon"
console.log(example.dequeue()) // Output: "Launch the rocket and land on the moon"

console.log(example.isEmpty()) // Output: true
