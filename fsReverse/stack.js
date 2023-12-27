const LinkedList = require("./linkedList");

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
    this._list = new LinkedList;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    this._list.addHead(val)
    this.first = this._list.head.val;
    this.last = this._list.tail.val;
    this.size++;
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
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

  /** peek(): return the value of the first node in the stack. */

  peek() {
    return this.first
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    if(this.size === 0) return true;
    return false;
  }
}

module.exports = Stack;
