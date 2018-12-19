// /**
//  * EXAMPLE 1
//  * 
//  * Empty Array
//  */
// const myArray = [];
// console.log(myArray);

// /**
//  * EXAMPLE 2
//  * 
//  * Add elements to the Array
//  */
// const myArray = [];
// myArray[0] = "First Element";

// console.log(myArray);

// myArray[1] = "Second Element";

// console.log(myArray);

// myArray.push("Third Element"); // Preferable

// console.log(myArray);

// /**
//  * EXAMPLE 3
//  * 
//  * Modify Elements
//  */
// const myArray = [3, true, "abc", {}];

// console.log(myArray);

// myArray[1] = "New Value for second element";

// console.log(myArray);

// myArray[0] = null;

// console.log(myArray);

// myArray[3].newProp = 10;

// console.log(myArray);
// console.log(myArray[3].newProp); // 10
// console.log(myArray[3]["newProp"]); // 10

// /**
//  * EXAMPLE 4
//  * 
//  * Square bracket notation
//  */
// const myArray = [1, 2];

// console.log(myArray[0]); // 1
// // If property name in the object is numeric you can't use dot notation
// console.log(myArray.0); // Uncaught SyntaxError: missing ) after argument list


// /**
//  * EXAMPLE 5
//  * 
//  * Delete elements
//  */
// const myArray = [true, null, 1, 2, "abc"];
// console.log(myArray);

// delete myArray[2];

// console.log(myArray); // element with index 2 is "empty"

// console.log(myArray[2]); // undefined

// myArray.pop();

// console.log(myArray); // [true, null, empty, 2]

// myArray.pop();

// console.log(myArray); // [true, null, empty]

// myArray.shift();

// console.log(myArray); // [null, empty]

// /**
//  * EXAMPLE 6
//  * 
//  * Compare Arrays
//  */
// const myArray1 = [1, 3, 2];
// const myArray2 = [1, 2, 3];

// console.log(myArray1 === myArray2); // false

// const copyOfMyArray1 = myArray1;

// console.log(copyOfMyArray1 === myArray1); // true

// console.log(myArray1.toString() === myArray2.toString()); // true