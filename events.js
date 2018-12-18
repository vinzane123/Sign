let ByteBuffer = require("bytebuffer");
let EventEmitter = require('events');

class MyEmitter extends EventEmitter{}

const myEmitter = new MyEmitter();

let data = 'dance table casual identify staff acquire thought expire merit capable carry stem';
let m =1
let n =1


myEmitter.on('event',function getBy(data){
    console.log("getBytes"+ ++m);   
});
myEmitter.emit('event');
myEmitter.emit('event');

// //Unregister Listener after once
// myEmitter.once('event', function getBytes(){
//     console.log("get2nd"+ ++n);
// });

// myEmitter.emit('event');

// myEmitter.on('event', function(a, b) {
//     console.log(a, b, this, this === myEmitter);
//   });
//   myEmitter.emit('event', 'a', 'b');
//   myEmitter.emit('event', 'a', 'b');

// myEmitter.on('event', (a, b) => {
//     setImmediate(() => {
//       console.log('this happens asynchronously');
//     });
//   });
//   myEmitter.emit('event');