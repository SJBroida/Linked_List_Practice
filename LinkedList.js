/**
 * `Node` is used to store values in a linked list
 */
class Node {
  constructor(value, next = null) {
    this.value = value; // stores our data
    this.next = next; // pointer to the next node
  }
}

/**
  * The `LinkedList` class holds a reference to the `head` node and has functions that update the list.
 */

class LinkedList {
  constructor() {
    this.head = null; // references the first Node in the LinkedList
    // this.length = 0;
  }

  /**
   * The number of nodes in the linked list
   *
   * @returns {number}
   *   The number of nodes in the linked list
   */
  get length() {
    let count = 0; // initialize our counter
    let node = this.head; // refers to the first node in our LL

    // while our node is not null
    // iterate through the LL
    while (node) {
      count++; // increment our counter
      node = node.next; // reassign our node to be the next node
    }

    return count;
  }

  /**
   * Insert a new value at the head of the list
   * @param value
   *  The new value to insert
   *
   * @returns {LinkedList}
   *  this linked list so methods can be chained
   */
  insertAtHead(value) {
    this.head = new Node(value, this.head); // Node(value, next)
    // this.length++;
    return this; // return the current state of the LL
  }

  /**
   * Insert the value after a matched node in the list.
   * By default, the value is inserted at the end of the list.
   *
   * @param value
   *  The value to add
   *
   * @param isMatch
   *  Optional function that returns `true` if the current node matches the search criteria
   *
   * @returns {LinkedList}
   *  this linked list so methods can be chained
   *
   * @throws 'No match found.'
   *  If list isn't empty and no matching element is found
   */
  insert(value, isMatch = (node, index) => index === this.length - 1) {
    // check if our LL is empty
    if (this.head) {
      // find the last node in the LL
      //   let node = this.head; // starting point for iterating through the LL

      //   // null is falsey so our loop will not proceed
      //   while (node.next) {
      //     node = node.next; // keep iterating through our LL until node.next = null (tail)
      //   }

      //   node.next = new Node(value); // create a new Node and insert into tail node
      // find the node to insert after
      const previousNode = this.find(isMatch);

      if (!previousNode) {
        throw new Error("No Match Found");
      }

      // assign next pointer to the new node
      // make the "next" pointer of the new Node be the old "next" of the previous Node
      const newNode = new Node(value, previousNode.next);
      previousNode.next = newNode;
    } else {
      this.insertAtHead(value); // case when LL is empty
    }

    return this;
  }

  /**
   * Find a node in the linked list.
   *
   * @param isMatch
   *  Function that returns `true` if the current node matches the search criteria
   *
   * @returns {Node|null}
   *  The first node where `isMatch(node, index) === true`,
   *  or `null` if no match is found
   */
  find(isMatch) {
    //let index = 0; // initialize counter
    //let node = this.head; // first node in the LL

    // iterate through our LL
    //while (node) {
      //if (isMatch(node, index)) {
        //return node;
      //}

      //index++; // increment the index #
      //node = node.next; // we did not find the node yet, move on to the next node
    //}

    //return null;
    return this.findWithPrevious(isMatch)[0];

  }

  /**
   * Find a node, and its previous node, in the linked list.
   * @param isMatch
   *  Function that returns `true` if the current node matches the search criteria
   *
   * @returns {[Node|null, Node|null]}
   *  The first element is the node where `isMatch(node, index) === true`, or `null` if no match is found.
   *  The second element is the previous Node, or `null` if no match is found.
   *  This second element is also `null` if `this.head` is the matched node.
   */
  findWithPrevious(isMatch) {
    let index = 0;
    let previous = null;
    let node = this.head;
    while (node) {
      if (isMatch(node, index)) {
        if(previous === null) {
          return node;
        } else {
          return [node, previous];
        }
      }
      index++;
      previous = node;
      node = node.next;
    }
    return [null, null];
      
  }

  /**
   * Remove the first node where `isMatch(node, index, this) === true`.
   *
   * @param isMatch
   *  Function that returns `true` if the current node matches the node to be removed
   *
   * @returns {*}
   *  The value of the removed node where `isMatch(node, index) === true`, or `null` if no match is found
   */
  remove(isMatch) {
    const [matchedNode, previousNode] = this.findWithPrevious(isMatch);
  
    if (!matchedNode) {
      return null;
    }
  
    if (this.head === matchedNode) {
      this.head = this.head.next;
    } else {
      previousNode.next = matchedNode.next;
    }
    return this;
  }

  
}

module.exports = LinkedList;
