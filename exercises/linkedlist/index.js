// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let counter = 0;
    let node = this.head;

    while(node) {
      counter += 1;
      node = node.next;
    }
    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let node = this.head;

    if (!node) {
      return null;
    }

    while (node) {
      if (!node.next) {
        return node;
      }
      node = node.next;
    }
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      return;
    }

    this.head = this.head.next;
  }

  removeLast() {
    let last = this.getLast();
    let node = this.head;

    if (!node) {
      return;
    }

    if (!this.head.next) {
      this.head = null;
      return;
    }

    while (node) {
      if (node.next == last) {
        node.next = null;
      }
      node = node.next;
    }
  }

  insertLast(data) {
    if (this.head == null) {
      this.insertFirst(data);
    }
    this.getLast().next = new Node(data, null);
  }
}

module.exports = { Node, LinkedList };
