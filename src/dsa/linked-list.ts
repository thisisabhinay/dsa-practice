/**
 * @typedef {Object} LinkedListNode
 * @property {any} value - The value stored in the node
 * @property {LinkedListNode} next - Reference to the next node
 */
type LinkedListNode = {
  value: any;
  next: LinkedListNode;
};

/**
 * Creates a new linked list node with the given value.
 * @param {any} value - The value to be stored in the node
 * @returns {LinkedListNode} The created linked list node
 */
function createNode(value): LinkedListNode {
  return {
    value,
    next: null,
  };
}

/**
 * Linked list implementation.
 */
export default class LinkedList {
  private head: LinkedListNode;
  private tail: LinkedListNode;
  public length: number;

  /**
   * Initializes an empty linked list.
   */
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  /**
   * Appends a new node with the given value to the end of the linked list.
   * @param {any} value - The value to be appended
   */
  push(value: any) {
    const node = createNode(value);

    // If the head is null, it means the list is empty.
    // In this case, we set both the head and tail to the new node,
    // indicating that the list has only one node.
    if (!this.head) {
      this.head = node;
      this.tail = node;
      this.length++;
      return;
    }

    // If the list is not empty, we append the new node as the next item
    // to the existing node at the tail. Then, we update the tail to point
    // to the new node, as it becomes the last node in the list.
    this.tail.next = node;
    this.tail = node;
    this.length++;
  }

  /**
   * Removes and returns the last node from the linked list.
   * @returns {LinkedListNode|null} The removed node or null if the list is empty
   */
  pop() {
    // If the list is empty, we simply return null.
    if (this.isEmpty()) return null;

    // If there is only one node in the list, both the head and tail
    // point to it. We return the tail node before removing the only node
    // from the list.
    let node = this.tail;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      this.length--;
      return node;
    }

    // If there are more than one node in the list, we return the tail node
    // and traverse the list to update the tail to point to the new last node.
    let current = this.head;
    let penultimate;
    while (current) {
      // Our target is the second-to-last node, which always points to the last node.
      if (current.next === this.tail) {
        penultimate = current;
        break;
      }
      current = current.next;
    }

    this.tail = penultimate;
    this.tail.next = null
    this.length--;
    return node;
  }

  /**
   * Retrieves the node at the specified index.
   * @param {number} index - The index of the node to retrieve
   * @returns {LinkedListNode|null} The node at the specified index or null if the index is out of bounds
   */
  get(index: number) {
    // If the index is out of bounds, we return null.
    if (index < 0 || index > this.length - 1) return null;

    // If the index is 0, we return the node pointed to by the head.
    if (index === 0) return this.head;

    // If the index is equal to the length of the list minus one,
    // we return the node pointed to by the tail.
    if (index === this.length - 1) return this.tail;

    // For the remaining cases, we traverse the list until we reach the target index.
    let current = this.head;

    // We are setting count as 1 because the current is already set and 
    // therefore the count now starts from 1
    let count = 1;
    while (count <= index) {
      count++;
      current = current.next;
    }

    return current;
  }

  /**
   * Deletes the node at the specified index.
   * @param {number} index - The index of the node to delete
   * @returns {LinkedListNode|null} The deleted node or null if the index is out of bounds
   */
  delete(index) {
    // If the index is out of bounds, we return null.
    if (index < 0 || index > this.length - 1) return null;

    // If the index is 0, we delete the head node.
    // We set the head to the next node and decrement the length before
    // returning the deleted node.
    if (index === 0) {
      const deleted = this.head;
      this.head = this.head.next;
      this.length--;
      return deleted;
    }

    // We don't create a special case for the tail node because we still need
    // to traverse the list similarly to deleting a node in between.
    let previous;
    let current = this.head;
    let count = 0;

    // The target node will be the current node at the given index.
    // We also save the previous node of the target node because once the
    // target node is removed, our previous node will point to the next node
    // of the target node.
    while (count <= index) {
      count++;
      previous = current;
      current = current.next;
    }

    const deleted = current.next;
    previous.next = deleted.next;

    // If the target node was the tail node, we set our previous node as the
    // new tail node.
    if (!previous.next) this.tail = previous;

    this.length--;
    return deleted;
  }

  /**
   * Checks if the linked list is empty.
   * @returns {boolean} True if the list is empty, false otherwise
   */
  isEmpty() {
    return this.length === 0;
  }

  /**
   * Returns a string representation of the linked list.
   * @returns {string} The string representation of the linked list
   */
  print() {
    const result = [];
    let current = this.head;
    while (current) {
      result.push(current.value);
      current = current.next;
    }

    return result.join(" -> ");
  }
}

const list = new LinkedList();

// Append nodes to the linked list
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);

console.log('Linked list:', list.print()); // Output: 1 -> 2 -> 3 -> 4 -> 5

// Get node at a specific index
console.log('Node at index 2:', list.get(2).value); // Output: 3

// Delete node at a specific index
const deletedNode = list.delete(2);
console.log('Deleted node at index 2:', deletedNode.value); // Output: 3
console.log('Updated linked list:', list.print()); // Output: 1 -> 2 -> 4 -> 5

// Remove the last node
const lastNode = list.pop();
console.log('Removed last node:', lastNode.value); // Output: 5
console.log('Final linked list:', list.print()); // Output: 1 -> 2 -> 4