/**
 * JS-BASICS/CORE/CHALLENGES/03-expressions-vs-statements
 * 
 */

// /**
// * TASK 1
// * 
// * Is it expression or statement?
// */
// const myObject = {
//   x: 10,
//   y: true
// };

// // console.log(delete myObject.x); // "delete" operator is used in the expressions

// delete myObject.x; // Expression statement

// /**
//  * TASK 2
//  * 
//  * What will be logged to the console?
//  */
// function fn() {
//   console.log("Greeting from the 'fn' function");

//   return function(a) {
//     console.log(a);
//   };
// }

// fn() // Greeting from the 'fn' function
// (true) // "true" because this line will be interpreted as function call with argument "true"

// /**
//  * TASK 3
//  * 
//  * Explain why semicolon is added?
//  */
// function firstFunction(a, b) {
//   return a + b;
// } // Function Declaration

// const secondFunction = function(a, b) {
//   return a + b;
// }; // Statement