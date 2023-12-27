const LinkedList = require("./linkedList");


/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
    this.bracketBalanced = 0;
    this.curlyBalanced = 0;
    this.squareBalanced = 0;
    this._list = new LinkedList();
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    this._list.addTail(val);
    this.first = this._list.head.val;
    this.last = this._list.tail.val;
    this.size++;
    if(val === '('){
      this.bracketBalanced++;
    }
    if(val === ')'){
      this.bracketBalanced--;
    }
    if(val === '{'){
      this.curlyBalanced++;
    }
    if(val === '}'){
      this.curlyBalanced--;
    }
    if(val === '['){
      this.squareBalanced++;
    }
    if(val === ']'){
      this.squareBalanced--;
    }
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    if(this.size === 0){
      throw new Error('Queue is empty!')
    }
    let temp = this.first;
    this._list.dequeue();
    if(this.size === 1){
      this.first = null;
    } else {
      this.first = this._list.head.val;
    }
    this.size--;
    return temp
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    return this.first
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    if(this.size === 0) return true;
    return false;
  }
}

module.exports = Queue;