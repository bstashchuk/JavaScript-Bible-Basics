// /**
//  * EXAMPLE 1
//  * 
//  * Simplest function in JavaScript
//  */
// function myFunction() {}

// console.log(myFunction); // myFunction() {}

// myFunction();

// const functionResult = myFunction();

// console.log(functionResult); // undefined

// console.log(myFunction()); // undefined

// console.log(myFunction(10, true)); // undefined

// /**
//  * EXAMPLE 2
//  * 
//  * Parameters of the function
//  */
// function myFunction(a, b) {
//   console.log(a);
//   console.log(b);
// }

// myFunction(10, 5); // 10, 5

// myFunction(true, null); // true, null

// myFunction(); // undefined, undefined

// myFunction("abc"); // abc, undefined

// console.log(myFunction(4, 3)); // undefined

// /**
//  * EXAMPLE 3
//  * 
//  * Function scope
//  */
// function myFunction(a, b) {
//   console.log(a, b);
// }

// console.log(myFunction(3, 2));

// console.log(a); // Uncaught ReferenceError: a is not defined
// console.log(b);

// /**
//  * EXAMPLE 4
//  * 
//  * Reuse parameter names
//  */
// function myFunction1(a, b) {
//   console.log(a, b);
// }

// function myFunction2(a, b) {
//   console.log(a, b);
// }

// const a = true;
// const b = null;

// myFunction1(2, 3); // 2, 3

// myFunction2(5, 7); // 5, 7

// console.log(a, b); // true, null

// /**
//  * EXAMPLE 5
//  * 
//  * Add "return"
//  */
// function sum(a, b) {
//   return a + b;
// }

// sum(10, 5); // function returns 15, but we see nothing in the console

// console.log(sum(2, 5)); // 7
// console.log(sum(10, 3)); // 13
// console.log(sum("abc", 2)); // "abc2"
// console.log(sum()); // NaN

// /**
//  * EXAMPLE 6
//  * 
//  * What happens after "return"?
//  */
// function myFunction(a) {
//   console.log(a);
//   return a; // function stops here
//   console.log(a);
//   const c = 20;
//   console.log(c);
// }

// myFunction(10);


// /**
//  * CHALLENGE 1
//  * 
//  * Create function called "mult" and it will have 3 parameters.
//  * Create new variable and assign to it result of multiplication of all 3 parameters.
//  * Print to the console result.
//  * Don't use "return".
//  */
// function mult(a, b, c) {
//   const result = a * b * c;
//   console.log(result);
// }

// mult(0, 3, 5); // 0

// mult(2, 3, 5); // 30

// mult(2, 3, "abc"); // NaN

// mult(); // NaN

// console.log(mult(2, 3, 5)); // 30 is printed inside of the function and function returns "undefined"

// /**
//  * CHALLENGE 2
//  * 
//  * Create a function "concatenateStrings" and it will have 2 parameters.
//  * And this function will return concatenated string.
//  */
// function concatenateStrings(str1, str2) {
//   return str1 + " " + str2;
// }

// const str3 = concatenateStrings("Hello", "World"); // "Hello World"

// console.log(str3);

// /** 
//  * CHALLENGE 3
//  * 
//  * Create function "outerFunction" with 2 parameters.
//  * Create function inside of the "outerFunction" and name it "innerFunction" with one parameter.
//  * This "innerFunction" will return square of parameter (parameter * parameter).
//  * 
//  * In the "outerFunction" sum both parameters.
//  * Call "innerFunction" with argument that is equal to sum of both parameters of the "outerFunction".
//  * Log to the console result of the "innerFunction" call.
//  */
// function outerFunction(a, b) {
//   function innerFunction(c) {
//     return c * c;
//   }
//   const sum = a + b;
//   const result = innerFunction(sum);

//   console.log(result);
// }

// // // Simplified
// // function outerFunction(a, b) {
// //   function innerFunction(c) {
// //     return c * c;
// //   }

// //   console.log(innerFunction(a + b));
// // }

// outerFunction(2, 3); // 25

// outerFunction(3, 7); // 100