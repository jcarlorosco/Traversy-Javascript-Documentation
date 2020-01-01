//PROMISES

// const sayHello = function() {
//   console.log("Hello");
// };
// sayHello();

//using arrow
// const sayHello = () => {
//   console.log("Hello");
// };

//One line function doesnt need curls
// const sayHello = () => console.log("Hello");
// sayHello();

//Usual way to return
// const sayHello = function() {
//   return "Hello";
// };
// console.log(sayHello());

//Online Returns using arrows
// const sayHello = () => "Hello";
// console.log(sayHello());

//Return Object
// const sayHello = () => ({
//   msg: "Hello"
// });
// console.log(sayHello());

//Single parameter doesnt need parenthesis
// const sayHello = name => console.log(`Hello ${name}`);
// sayHello("carlo");

//Multiple parameter need parenthesis
// const sayHello = (firstName, lastName) =>
//   console.log(`Hello ${firstName} ${lastName}`);
// sayHello("Carlo", "Rosco");

const users = ["Carlo", "Jam", "Jerwin"];
//Usual way to declare an array
// const nameLengths = users.map(function(name) {
//   return name.length;
// });

//Using Arrow (Shorter)
// const nameLengths = users.map(name => {
//   return name.length;
// });

//Shortest
const nameLengths = users.map(name => name.length);
console.log(nameLengths);
