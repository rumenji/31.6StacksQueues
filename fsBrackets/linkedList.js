/** Node class for item in linked list. */

class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  // end
  
  /** LinkedList class, keeping track of head and tail. */
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    }
  
    /** push(val): add node w/val to end of list. */
  
    addTail(val) {
      let newNode = new Node(val);
  
      if (this.head === null) this.head = newNode;
  
      if (this.tail !== null) this.tail.next = newNode;
  
      this.tail = newNode;
    }

    addHead(val) {
      const newNode = new Node(val);
      if(this.head === null){
        this.head = newNode;
        this.tail = newNode;
      }
      else {
        let curFirst = this.head;
        this.head = newNode;
        this.head.next = curFirst;
  
      }
      
      this.size++;
    }

    /** dequeue() and pop(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */
    dequeue() {
        
        this.head = this.head.next;
      }


    print() {
      let current = this.head;
      let values = "";
      while (current !== null) {
        values += current.val;
        current = current.next;
      }
      return values
    }

}


module.exports = LinkedList;