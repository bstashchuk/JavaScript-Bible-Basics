// /**
//  * EXAMPLE 1 - Create object and modify its properties
//  */
// let myObject;

// myObject = {
//   a: 10,
//   b: "abc"
// };

// console.log(myObject);

// myObject.a = 15;

// console.log(myObject);

// myObject.c = true;

// console.log(myObject);

// delete myObject.b;

// console.log(myObject);

// console.log(myObject.a);

// /**
//  * CHALLENGE 1
//  * 
//  * Create variable called "myPost".
//  * Initial value should be {}
//  * Add property called "postTitle" and value "Object is reference type"
//  * Add one more property "postLikes" with value 0
//  * Add third property "shared" and set its value to "false"
//  * Increase value of the "postLikes" by 1
//  * Delete property "shared"
//  */
// let myPost = {};

// myPost.postTitle = "Object is reference type";

// myPost.postLikes = 0;

// myPost.shared = false;

// console.log(myPost);

// myPost.postLikes = myPost.postLikes + 1;

// console.log(myPost);

// delete myPost.shared;

// console.log(myPost);

// /**
//  * EXAMPLE 2
//  * 
//  * Use "const" for object declaration
//  */
// const myObject = {};

// myObject.a = true; // NO ERROR! Variable is not reassigned

// console.log(myObject);

// myObject = {
//   a: true
// }; // Uncaught TypeError: Assignment to constant variable.

// /**
//  * CHALLENGE 2
//  * 
//  * Create variable "myObject" and add property "a" - 10.
//  * Create another variable "copyOfMyObject" and its value should be myObject.
//  * Add new property "b" with value false to the "copyOfMyObject".
//  * Print to the console "myObject" and "copyOfMyObject" and interpret results.
//  */
// let myObject = {
//   a: 10
// };
// let copyOfMyObject = myObject;

// copyOfMyObject.b = false;

// console.log(myObject);
// console.log(copyOfMyObject);

// /**
//  * EXAMPLE 3
//  * 
//  * Bracket notation
//  */
// let myObject = {
//   a: true,
//   b: null,
//   c: 25
// };

// console.log(myObject["a"]); // true

// // console.log(myObject[a]); // Uncaught ReferenceError: a is not defined

// console.log(myObject["b"]); // null

// const propertyName = "c";

// console.log(myObject[propertyName]); // 25

// console.log(myObject["propertyName"]); // undefined

// myObject["new" + "Property" + "Name"] = "Value for dynamically computed property name";

// console.log(myObject);

// /**
//  * EXAMPLE 4
//  * 
//  * Missing properties
//  */
// const myObject = {
//   a: 3,
//   b: true
// };

// // Code exectuion is not stopped
// console.log(myObject.c); // undefined

// console.log(myObject.absentProperty); // undefined

// // // Code exectuion is STOPPED
// // console.log(nonDeclaredVariable); // Uncaught ReferenceError: nonDeclaredVariable is not defined

// // IMPORTANT!!!
// // NEVER ASSIGN "undefined" to any property or variable. Use "null" instead
// myObject.newPropertyWithUndefinedValue = undefined;

// console.log(myObject);
// console.log(myObject.newPropertyWithUndefinedValue);

// /**
//  * CHALLENGE 3
//  * 
//  * Create object "objectWithNestedObject" with initial value {}.
//  * Add property "nestedObject" with initial value {}.
//  * Add property "a" with value "null" to "nestedObject". Use dot notation
//  * Add property "b" with value "true" to "nestedObject". Use bracket notation. Create new variable with property name
//  */
// let objectWithNestedObject = {};
// objectWithNestedObject.nestedObject = {};

// objectWithNestedObject.nestedObject.a = null;

// const newPropertyName = "b";

// objectWithNestedObject.nestedObject[newPropertyName] = true;

// console.log(objectWithNestedObject);