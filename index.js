// /**
//  * EXAMPLE 1
//  * 
//  * Try to "declare" function expression
//  */
// // It is not possible to use function expression standalone
// function() { } //Uncaught SyntaxError: Unexpected token (

// /**
//  * EXAMPLE 2
//  * 
//  * Assign function expression to the variable
//  */
// const myFunction = function() { };

// console.log(myFunction()); // undefined

// console.log(myFunction); // ƒ () { }

// /**
//  * EXAMPLE 3
//  * 
//  * Callback function
//  */
// setTimeout(function() {
//   console.log("Delayed message");
// }, 3000);

// /**
//  * EXAMPLE 4
//  * 
//  * Callback function (example 2)
//  */
// let i = 1;
// setInterval(function() {
//   console.log("Message logged each 1 second " + i);
//   i = i + 1;
// }, 1000);