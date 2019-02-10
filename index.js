// // EXAMPLE 1 - global and function execution contexts
// // Global execution context
// console.log("This is global execution context");

// const a = 10;

// console.log(a);

// function myFunction(a, b) {
//   console.log("This is function execution context");
//   return a + b;
// }

// console.log(myFunction(5, 20)); // new function execution context is created

// console.log(myFunction(3, 5)); // new function execution context is created



// // EXAMPLE 2 - Execution contexts stack

// console.log("Global execution context - root level in the stack");

// function firstLevel() {
//   console.log("Function execution context - second level in the stack");

//   function secondLevel() {
//     console.log("Function execution context - third level in the stack");

//     function thirdLevel() {
//       console.log("Function execution context - fourth level in the stack");
//     }

//     thirdLevel();
//   }

//   secondLevel();
// }

// firstLevel();