// function makeid() {
//     var text = "";
//     var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
//     for (var i = 0; i < 5; i++)
//       text += possible.charAt(Math.floor(Math.random() * possible.length));
  
//     return text;
//   }
  
//   console.log(makeid());

// let result = 0

// for(let i =2; i < process.argv.length;i++) {
//   result += Number(process.argv[i])
//   console.log(result)
// }

// console.log(result)

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());

var p = "vinodhp1412@gmail.com"  

console.log(validateEmail(p));
