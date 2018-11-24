// /**
//  * SECTION 1
//  * 
//  * Arithmetic Operators
//  */
// let a, b;
// a = 1;
// b = 2;

// // Math with numbers
// console.log(a + b); // 3
// console.log(a * b); // 2
// console.log(a / b); // 0.5
// console.log(a - b); // -1

// a = "abc";
// b = 5;

// // Math with non-numbers
// console.log(a + b); // abc5
// console.log(a * b); // NaN
// console.log(a / b); // NaN
// console.log(a - b); // NaN

// a = "Hello";
// b = "World";

// // Strings concatenation
// console.log(a + " " + b);

// let c = "1";

// // Unary plus
// console.log(+c); // 1
// console.log(Number(c)); // 1
// c = undefined;
// console.log(+c); // NaN

// // Unary minus
// c = "5";
// console.log(-c); // -5
// c = "abc";
// console.log(-c); // NaN

// // ++
// let d = 5;
// ++d; // Same as d = d + 1
// console.log(d); // 6
// d++;
// console.log(d); // 7

// // Built-in "++" function FIRST increments value of the operand and SECOND returns value of the operand
// console.log(++d); // 8
// // Built-in "++" function FIRST returns value of the operand and SECOND increments value of the operand
// console.log(d++); // 8
// console.log(d); // 9

// // --
// console.log(d--); // 9
// console.log(d); // 8
// console.log(--d); // 7 - Same as d = d - 1
// console.log(d); // 7




// /**
//  * SECTION 2
//  * 
//  * Comparison operators
//  */
// // Numbers comparison
// let a, b, c;

// a = 5;
// b = 7;
// c = 5;

// console.log(a < b);
// console.log(a > b);

// console.log(a <= c);
// console.log(a >= c);

// console.log("____");

// // Strings comparison
// let myStr1, myStr2, myStr3;

// myStr1 = "abc";
// myStr2 = "bcd";
// myStr3 = "Bcd";
// // Sorted strings "Bcd", "abc", "bcd"

// console.log(myStr1 > myStr2); // false
// console.log(myStr1 < myStr2); // true

// console.log(myStr1 > myStr3); // true

// console.log("____");

// // Equality operators
// // NEVER USE "==" and "!=" operators!!!
// let myString = "0";
// let myNumber = 0;
// let myBoolean = false;

// // Types of the values may be different
// console.log(myString == myNumber); // true
// console.log(myNumber == myBoolean); // true
// console.log(myString == myBoolean); // true

// // TYPE and VALUE are compared
// console.log(myString === myNumber); // false
// console.log(myNumber === myBoolean); // false
// console.log(myString === myBoolean); // false

// // How you SHOULD compare variables of different types
// console.log(Number(myString) === myNumber); // true
// console.log(+myString === myNumber); // true

// console.log(myString != myNumber); // false
// console.log(myString !== myNumber); // true

// console.log("____");

// console.log(null === undefined); // false
// console.log(null == undefined); // true

// console.log("____");

// console.log(0 === "" === null === undefined === false); // true





// /**
//  * SECTION 3
//  * 
//  * Logical operators
//  */
// // OR operator ||
// console.log(true || false); // true
// console.log(false || true); // true

// console.log("abc" || ""); // abc
// console.log("" || "abc"); // abc
// console.log("" || ""); // ""

// // Falsy values
// console.log("" || 0 || null || undefined || NaN || false);

// let city;
// const defaultCity = "New York";

// let myCity = city || defaultCity;
// console.log(myCity);

// console.log("___");

// let myOtherCity = city || console.log("Fill in city please") || defaultCity;
// console.log(myOtherCity);

// console.log("___");


// city = "Los Angeles";

// myCity = city || defaultCity;
// console.log(myCity);

// console.log("___");

// // AND operator &&
// console.log(true && false); // false
// console.log(false && true); // false

// // AND returns value of the first "falsy" operand
// console.log("abc" && 10 && false && "" && "abcd"); // false
// console.log("abc" && 10 && NaN && "" && "abcd"); // NaN
// console.log("abc" && 10 && "" && "abcd"); // ""

// // All operands are "truthy"
// console.log("abc" && 10 && true && 123 && "Hello World"); // "Hello World"

// console.log("___");

// // NOT operator !
// console.log(!"abc"); // false
// console.log(!""); // true
// console.log(!0); // true

// let myVariable;
// myVariable = undefined;
// console.log(!myVariable); // true

// myVariable = "Bogdan";
// console.log(!myVariable); // false

// // Quick truthy/falsy check
// myVariable = null;
// console.log(!!myVariable); // false
// myVariable = 10;
// console.log(!!myVariable); // true
