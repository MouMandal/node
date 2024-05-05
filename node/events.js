const EventEmitter = require('events');

class MyEmitter extends EventEmitter { }

const myEmitter = new MyEmitter();
myEmitter.on('push', () => {
    console.log('push the door');
    setTimeout(() => {
        console.log("come");
    }, 2000);
});
console.log("Welcome to my house");
myEmitter.emit('push');
console.log("I know that your are my father's relatives");