// /**
//  * EXPRESSIONS
//  */
// 10
// "abc"
// 5 + 3

// ;(function(a) {
//   console.log(a);
// }) // Function expression embedded into the "()"

// // Immediately Invoked Function Expression
// ;(function() {
//   console.log("Hello from IIFE");
// })() // Function call is expression

// let a;
// a = 10 // Assignment expression

// // 5 = true // Uncaught ReferenceError: Invalid left-hand side in assignment

// 4 <= 10 <= 20 || 5 // true - Logical expression

// /**
//  * STATEMENTS
//  */
// let a; // Variable declaration is statement

// a = 3

// function myFunction(b) {
//   // Quick check that "return" is a statement (not expression)
//   // console.log(return b); // Uncaught SyntaxError: Unexpected token return
//   return b;
// }

// myFunction(a)

// if (true) {
//   console.log("Hello from 'if' statement!");
// } // "if" statement


// // Quick check that "if" is statement
// // console.log(if (true) {
// //   console.log("Hello from 'if' statement!");
// // }); // Uncaught SyntaxError: Unexpected token if

// /**
//  * EXPRESSION STATEMENTS
//  */
// console.log(4 + 3); // Expression statement

// // console.log(console.log(4 + 3);); // Uncaught SyntaxError: missing ) after argument list

// console.log(console.log(4 + 3)); // Expression statement

// let a;
// a = 5; // Expression statement

// true; // Expression statement

// // console.log(true;); // Uncaught SyntaxError: missing ) after argument list

// console.log(true);