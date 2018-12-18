// // evalerror , syntaxerror, rangeerror, reference error, typeerror, urierror

// try {
//     const m = 1;
//     const n = m +z;
// } catch (err) {
//     console.log('')
// }


// function getData(data){

// if(cond){
//     return ;
// }

// try{

// } catch(e){
//     throw e;
// }
//   return ;

// }

// function getData(err,data){
//     if(err){
//         console.log("There was an error");
//         return;
//     }
//     console.log(data)
// }

//callback

var EventEmitter = require('events')

class event extends EventEmitter {}

var eventm = new event();

function Random(){
    console.log("Just kick the ass out!");
}

Random()

// function First(x,y,callback){
//     try{
//     console.log("Print x :"+x + " Print y :" +y);
//     callback(null,x,y); 
//     }
//     catch(e)
// {
//     throw e;
// }}
// First(1,2,function Second(){
//     console.log("Print z :")
//     // Second(2);
// })

// eventm.on("events", Random);
// eventm.emit("events")





