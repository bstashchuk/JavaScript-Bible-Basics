/**
 * JS-BASICS/CORE/CHALLENGES/06-loops-and-conditions
 * 
 */
// /**
//  * TASK 1
//  * 
//  * Loop through the object and if property name(key) is either "key1" or "key3" log to the console property value
//  */
// const myObject = {
//   key1: true,
//   key5: 10,
//   key3: "abc",
//   key4: null,
//   key10: NaN
// };

// // ANSWER
// for (let key in myObject) {
//   if (key === "key1" || key === "key3") {
//     console.log(myObject[key]);
//   }
// }


// /**
//  * TASK 2
//  * 
//  * Generate new 4-digit random number.
//  * Range for the random number is 1000-9999.
//  * 
//  * Ensure that this new random number doesn't match any of the numbers in the myNumbers array.
//  * If it matches you need to generate new 4-digit number.
//  * If there is no match(new number is unique) then add it to the myNumbers array.
//  */
// const MIN = 1000;
// const MAX = 9999;

// const myNumbers = [
//   2355,
//   7235,
//   8135,
//   1762,
//   2361,
//   8351
// ];

// let newRandomNumber;

// function getRandomInt(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min; 
// }

// function isNotUnique(newRandomNum) {
//   // compare num with numbers in the myNumbers array
//   for (let number of myNumbers) {
//     if (number === newRandomNum) {
//       console.log("Number " + newRandomNum + " is not unique!");
//       return true;
//     }
//   }
// }

// do {
//   newRandomNumber = getRandomInt(MIN, MAX);
// } while (isNotUnique(newRandomNumber));

// myNumbers.push(newRandomNumber);

// console.log(myNumbers);


// /**
//  * TASK 3
//  * 
//  * For in loop. Make "for in" loop iterate only over own properties of the myObject
//  */
// const myObject = {
//   name: "Mike",
//   age: 30,
//   city: "London"
// };

// Object.prototype.country = "England";

// for (let key in myObject) {
//   if (myObject.hasOwnProperty(key)) {
//     console.log(myObject[key]);
//   }
// }

// /**
//  * TASK 4
//  * 
//  * Rewrite "if...else" statement with ternary operator
//  */
// // function emptyArray(inputArray) {
// //   if (inputArray.length > 0) {
// //     return "Array is not empty";
// //   } else {
// //     return "Array is empty";
// //   }
// // }

// // console.log(emptyArray([1, 3]));
// // console.log(emptyArray([]));


// //ANSWER
// function emptyArray(inputArray) {
//   return inputArray.length > 0
//     ? "Array is not empty"
//     : "Array is empty";
// }

// console.log(emptyArray([1, 3]));
// console.log(emptyArray([]));
