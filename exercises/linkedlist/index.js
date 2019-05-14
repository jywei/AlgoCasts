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

  // insertFirst(data) {
  //   this.head = new Node(data, this.head);
  // }
  insertFirst(data) {
    this.insertAt(data, 0);
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

  // getFirst() {
  //   return this.head;
  // }
  getFirst() {
    return this.getAt(0);
  }

  // getLast() {
  //   let node = this.head;

  //   if (!node) {
  //     return null;
  //   }

  //   while (node) {
  //     if (!node.next) {
  //       return node;
  //     }
  //     node = node.next;
  //   }
  // }
  getLast() {
    return this.getAt(this.size() - 1);
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
    const last = this.getLast();

    if (last) {
      // There are some existing nodes in our chain
      last.next = new Node(data);
    } else {
      // The chain is empty!
      this.head = new Node(data);
    }
  }

  getAt(index) {
    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.next;
    }
    return null;
  }

  removeAt(index) {
    if (!this.head) {
      return;
    }

    if (index === 0) {
      this.head = this.head.next
      return;
    }

    const previous = this.getAt(index - 1);
    if (!previous || !previous.next) {
      return;
    }
    previous.next = previous.next.next;
  }

  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }

    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    const previous = this.getAt(index - 1) || this.getLast();
    const node = new Node(data, previous.next);
    previous.next = node;
  }
}

module.exports = { Node, LinkedList };
