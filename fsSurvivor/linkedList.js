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
    constructor(length) {
      this.head = null;
      this.tail = null;
      this.length = length;
    }
  
    /** push(val): add node w/val to end of list. */
  
    addTail(val) {
      let newNode = new Node(val);
  
      if (this.head === null) {
        this.head = newNode;
      }
  
      if (this.tail !== null) this.tail.next = newNode;
  
      this.tail = newNode;
      this.tail.next = this.head
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
    dequeueStep(step) {
        let ptr1 = this.head;
        let ptr2 = this.head;
        while(ptr1.next !== ptr1){
          let count = 1;
          while(count !== step){
            ptr2 = ptr1;
            ptr1 = ptr1.next;
            count++;
          }
          ptr2.next = ptr1.next;
          ptr1 = ptr2.next;
        }
        return ptr1.val
        // for(let i = 1; current === current.next ; i++){
        //   if(i === step){
        //     let next = current.next.next;
        //     current.next = next;
        //     i = 1;
        //   } 
        //   current = current.next;
          
          
        // }
          
      }

    dequeue() {
      if (this.head == this.tail) {
        this.tail = null;
      }
      this.head = this.head.next;
    }
}

module.exports = LinkedList;