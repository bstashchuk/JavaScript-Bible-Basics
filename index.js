/**
 * JS-BASICS/CORE/CHALLENGES/04-scopes
 * 
 */
// /**
//  * TASK 1
//  * 
//  * Function scopes
//  * What will be logged to the console?
//  */
// const b = 2;
// let d = 15;

// function myFn1(a) {
//   let b;
//   let d = 10;
//   myFn2(b);
// }

// function myFn2(a) {
//   let c = 5;
//   console.log(a, b, c, d);
// }

// myFn1();

// // ANSWER: undefined, 2, 5, 15


// /**
//  * TASK 2
//  * 
//  * Strict mode
//  * Fix problems with the code below
//  */
// // "use strict";

// // function myFunction() {
// //   a = 2;
// //   return a;
// // }

// // myFunction();

// // ANSWER
// "use strict";

// function myFunction() {
//   let a = 2;
//   return a;
// }

// myFunction();


// /**
//  * TASK 3
//  * 
//  * Callback function
//  * What will be logged to the console?
//  */
// setTimeout(function myFn() {
//   console.log("Hello from myFn function");
// }, 2000);

// myFn();

// // ANSWER
// // Uncaught ReferenceError: myFn is not defined
// // "Hello from myFn function"