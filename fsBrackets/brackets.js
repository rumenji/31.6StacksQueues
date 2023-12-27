const Queue = require("./queue");
// const Stack = require("./stack");

function brackets(string){
    bracketBalanced = 0;
    curlyBalanced = 0;
    squareBalanced = 0;
    queue = new Queue();
    for(let char of string){
        queue.enqueue(char)
        if(char === '('){
            bracketBalanced++;
        }
        if(char === ')'){
            bracketBalanced--;
        }
        if(char === '{'){
            curlyBalanced++;
        }
        if(char === '}'){
            curlyBalanced--;
        }
        if(char === '['){
            squareBalanced++;
        }
        if(char === ']'){
            squareBalanced--;
        }
        if(bracketBalanced < 0 || curlyBalanced < 0 || squareBalanced <0) return false
    }
    if(bracketBalanced !== 0 || curlyBalanced !== 0 || squareBalanced !== 0) {
        return false 
    } else {
        return true
    }
}