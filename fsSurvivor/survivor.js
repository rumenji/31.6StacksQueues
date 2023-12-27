const Queue = require("./queue");
// const Stack = require("./stack");

function survivor(length, step){
    let queue = new Queue(length);
    queue.enqueue(length);
    
    return queue.dequeueStep(step)
}