let balance = 120; // type: Number
let anotherBalance = new Number(120); // type: Object (not recommended)

let boolean = true; // type: Boolean
let anotherBoolean = new Number(true); // type: Object

// Null and Undefined
// not defined: calling something that is not in code.
let firstname; // undefined
// let firstname = undefined; // also undefined
let lastname = null; // null, its means empty, not zero

// String
let myString = "hello";
let stringTwo = 'hola';
let username = 'john';

// String Interpolation
let oldGreet = myString + " " + username;
console.log(oldGreet)

let newGreet = `Hello, ${username}`
console.log(newGreet)

// Symbol
let sym1 = Symbol();
let sym2 = Symbol();