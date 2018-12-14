// /**
//  * EXAMPLE 1
//  * 
//  * Global scope
//  */
// var a = 10;
// let b = true;

// console.log(a); // 10
// console.log(window.a); // 10

// console.log(b); // true
// console.log(window.b); // undefined

// const c = "abc";

// console.log(c); // "abc"
// console.log(window.c); // undefined

// function myFunction(a) {
//   console.log(a); // undefined
//   console.log(b); // true
// }

// console.log(myFunction);
// /**
//  * ƒ myFunction(a) {
//   console.log(a);
// }
//  */
// console.log(window.myFunction);
// /**
//  * ƒ myFunction(a) {
//   console.log(a);
// }
//  */

// myFunction();


// /**
//  * EXAMPLE 2
//  * 
//  * Function scope
//  */

// let e;

// function myFunction(a, b) {
//   const c = true;
//   console.log(c); // true
//   // console.log(d); // Uncaught ReferenceError: d is not defined at myFunction
//   console.log(e); // undefined

//   console.log(a, b); // values of the parameters "a" and "b"
// }

// myFunction();

// myFunction(2, 3);

// // console.log(c); // Uncaught ReferenceError: c is not defined

// // console.log(a); // Uncaught ReferenceError: a is not defined

// // console.log(b); // Uncaught ReferenceError: b is not defined


// /**
//  * EXAMPLE 3
//  * 
//  * Scope chain
//  */
// const c = 2;

// function sum(a, b) {
//   // const c = 3;
//   function mult(a, b) {
//     return a * b * c; // 100
//   }
//   console.log(mult(a, b));
//   return a + b;
// }

// const result = sum(10, 5);
// console.log(result); // 15


// /**
//  * EXAMPLE 4
//  * 
//  * Undeclared variable
//  */

// a = 10; // variable "a" will be automatically declared in the global scope
// console.log(a);

// const myFunction = function() {
//   b = 5; // variable "b" will be automatically declared in the global scope
//   console.log(b); // 5
// }

// myFunction();

// console.log(b); // 5

// /**
//  * EXAMPLE 5
//  * 
//  * Strict mode
//  */
// "use strict";

// // a = 10; // Uncaught ReferenceError: a is not defined

// function myFn() {
//   b = 5; // Uncaught ReferenceError: b is not defined at myFn
// }

// myFn(); 

// /**
//  * EXAMPLE 6
//  * 
//  * Strict mode in the function
//  */
// a = 10;

// function myFn() {
//   "use strict";
//   // b = 5; // Uncaught ReferenceError: b is not defined at myFn
// }

// myFn(); 