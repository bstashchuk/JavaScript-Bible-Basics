// // EXAMPLE 1 - "this" in the global execution context
// console.log(this); // window

// console.log(this === window); // true

// this.console.log("Method of this"); // Method of this




// // EXAMPLE 2 - "this" inside of the function
// function myFunction() {
//   console.log(this);
// }

// myFunction();

// window.myFunction();


// // EXAMPLE 3 - "this" inside of the function in strict mode
// "use strict";

// function myFunction() {
//   console.log(this);
// }

// myFunction(); // "this" is undefined in strict mode

// window.myFunction(); // "this" is equal to window in strict mode


// // EXAMPLE 4 - "this" inside of the methods of the object
// const myObject = {
//   name: "Alice",
//   age: 20,
//   greeting: function() {
//     console.log(this); // {name: "Alice", age: 20, greeting: ....}
//     console.log("Name of the person is " + this.name + " and age is " + this.age); // Name of the person is Alice and age is 20
//   }
// };

// myObject.greeting();

// // greeting(); // Uncaught ReferenceError: greeting is not defined