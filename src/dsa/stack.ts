/**
 * Stack class representing a LIFO (Last In First Out) data structure.
 */
export default class Stack {
  // LIFO: Last In First Out
  private stack: any[]

  /**
   * Creates an instance of Stack.
   */
  constructor() {
    this.stack = []
  }

  /**
   * Pushes an item onto the stack.
   * @param {*} item - The item to be pushed onto the stack.
   */
  push(item: any) {
    this.stack.push(item)
  }

  /**
   * Removes and returns the top item from the stack.
   * @returns {*} The top item from the stack.
   */
  pop() {
    return this.stack.pop()
  }

  /**
   * Returns the top item from the stack without removing it.
   * @returns {*} The top item from the stack, or null if the stack is empty.
   */
  peek() {
    if (this.isEmpty()) return null

    return this.stack[this.length - 1]
  }

  /**
   * Checks if the stack is empty.
   * @returns {boolean} True if the stack is empty, false otherwise.
   */
  isEmpty() {
    return this.stack.length === 0
  }

  /**
   * Gets the current length of the stack.
   * @returns {number} The length of the stack.
   */
  get length() {
    return this.stack.length
  }
}

// Create a new stack
const stack = new Stack();

// Push items onto the stack
stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.length); // Output: 3

// Peek at the top item
console.log(stack.peek()); // Output: 3

// Pop items from the stack
console.log(stack.pop()); // Output: 3
console.log(stack.pop()); // Output: 2

console.log(stack.length); // Output: 1

console.log(stack.isEmpty()); // Output: false

console.log(stack.pop()); // Output: 1

console.log(stack.isEmpty()); // Output: true