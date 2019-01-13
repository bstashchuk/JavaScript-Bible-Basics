// /**
//  * EXAMPLE 1
//  * 
//  * Regular for loop
//  */
// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }
// // console.log(i); // "i" is not available in the global scope

// /**
//  * EXAMPLE 2
//  * 
//  * Regular for loop with arrays
//  * NEVER USE THIS KIND OF LOOPS WITH ARRAYS
//  */
// const myArray = [0, true, "abc", null];

// for (let i = 0; i < myArray.length; i++) {
//   console.log(myArray[i]);
// }

// /**
//  * EXAMPLE 3
//  * 
//  * While loop
//  */
// let i = 0;

// while (i > -5) {
//   console.log(i);
//   i--;
// }

// /**
//  * EXAMPLE 4
//  * 
//  * Do while loop
//  */
// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i < 10);

// /**
//  * EXAMPLE 5
//  * 
//  * For in loop with Objects
//  */
// const myObject = {
//   a: "abc",
//   b: true,
//   c: null,
//   d: 150
// };

// for (let key in myObject) {
//   console.log(key);
//   console.log(myObject[key]);
// }


// /**
//  * EXAMPLE 6
//  * 
//  * For in loop with Objects with inherited properties
//  */
// const myObject = {
//   a: "abc",
//   b: true,
//   c: null,
//   d: 150
// };

// Object.prototype.globalProp = "Inherited property";

// for (let key in myObject) {
//   console.log(key, myObject[key]);
// }

// /**
//  * EXAMPLE 7
//  * 
//  * For in loop with arrays
//  */
// const myArray = [true, {}, {}, 10];

// Array.prototype.globalProp = "Global array property";

// for (let key in myArray) {
//   console.log(key, myArray[key]);
// }

// /**
//  * EXAMPLE 8
//  * 
//  * For of loop with Arrays
//  */
// const persons = [
//   {
//     name: "Mike",
//     age: 25
//   },
//   {
//     name: "Bob",
//     age: 30
//   },
//   {
//     name: "Alice",
//     age: 27
//   }
// ];

// for (let person of persons) {
//   console.log(person.name + " is " + person.age + " years old");
// }
// // console.log(person); // Uncaught ReferenceError: person is not defined

