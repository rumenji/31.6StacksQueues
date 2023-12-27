
const Stack = require("./stack");

function reverse(string){
    let stack = new Stack();
    for(let char of string){
        stack.push(char)
    }
    return stack._list.print();
}