/**
 * JS-BASICS/CORE/CHALLENGES/02-operators
 * 
 */

// /**
//  * TASK 1
//  * 
//  * Compare 2 variables "myVariable1" and "myVariable2".
//  * Log to the console "true" if "myVariable1" is less than or equal to "myVariable2".
//  * Convert both variables to numbers before comparison.
//  */
// let myVariable1 = 10;
// let myVariable2 = "5";

// console.log(+myVariable1 <= +myVariable2);

// myVariable1 = "20";
// myVariable2 = 100;

// console.log(+myVariable1 <= +myVariable2);



// /**
//  * TASK 2
//  * 
//  * Print to the console remainder of the division of "myNumber1" by "myNumber2".
//  * Which precedence and associativity has this operator?
//  */
// let myNumber1 = 10; // 10 = 3 + 3 + 3 + 1
// let myNumber2 = 3;

// console.log(myNumber1 % myNumber2); // 1
// console.log(25 % 5); // 0
// console.log(14 % 8); // 6

// console.log(100 % 30 % 3); // 1 - left-to-right


// /**
//  * TASK 3
//  * 
//  * What will be logged to the console?
//  */
// console.log(3 || true && null || false);
// // STEP 1: true && null -> null
// // STEP 2: 3 || null -> 3
// // RESULT: 3



// /**
//  * TASK 4
//  * 
//  * Find alternatives
//  */
// let a = 10;

// // a = a + 1;
// a += 1;
// console.log(a); // 11

// // a = a * 2;
// a *= 2;
// console.log(a); // 22

// // a = a - 5;
// a -= 5;
// console.log(a); // 17

// // a = a / 2;
// a /= 2;
// console.log(a); // 8.5