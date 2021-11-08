// Problem: Given an linked list containing sorted numbers, insert a new
// number in the correct position

class Node {
    constructor(value, next) {
      this.value = value;
      this.next = next;
    }
  }
  
  class LinkedList {
    constructor(items) {
      this.head = null;
  
      items.forEach((item) => this.push(item));
    }
  
    push(item) {
      if (this.head === null) {
        this.head = new Node(item, null);
        return;
      }
  
      let node = this.head;
      while (node.next !== null) {
        node = node.next;
      }
      node.next = new Node(item, null);
    }
  
    show() {
      let node = this.head;
      while (node !== null) {
        process.stdout.write(`${node.value}, `);
        node = node.next;
      }
      process.stdout.write("\n");
    }
  
    insertSorted(value) {
        // insert a node with the value in the correct position of the LL
        let node = this.head;
        while(node !== null) {
            node = node.next;
        }
    }

  }
  
  let l = new LinkedList([1, 3, 5, 6, 7, 9]);
  l.insertSorted(8);
  l.show(); // 1, 3, 5, 6, 7, 8, 9
  