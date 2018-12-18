var EventEmitter = require('events')

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
const newEmitter = new MyEmitter();
var count = 0;
var getsomething = function(){
    console.log("Hey Chick! : "+ ++count);
}

var getonething = function(){
    console.log("Welcome aboard! : "+ ++count);
}
newEmitter.on('events', getsomething);
newEmitter.on('events',getonething);
newEmitter.emit('events');

// console.log(newEmitter.listenerCount('events'));



myEmitter.once('newListener', (event, listener) => {
    if (event === 'event') {
      myEmitter.on('event',getsomething);
    }
  });
  myEmitter.on('event', getonething);
  // console.log(myEmitter.listenerCount('event'));
 
for ( i=1 ;i<=2 ; i++){
    console.log("Now, it's time to Fcuk Babe! : " + i);
}

// const ee = new EventEmitter();

// function pong() {
//   console.log('pong');
// }

// ee.on('ping', pong);
// ee.removeListener('ping', pong);
