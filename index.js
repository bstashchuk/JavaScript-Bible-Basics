/**
 * JS-BASICS/CORE/CHALLENGE 01: SOLUTION - Function Expressions
 * 
 * Use following built-in functions:
 * setTimeout
 * setInterval
 * clearInterval
 * 
 * You should print to the console ONLY 5 messages with interval 2 seconds:
 * "Here is message number 1"
 * "Here is message number 2"
 * "Here is message number 3"
 * "Here is message number 4"
 * "Here is message number 5"
 */
let i = 1;
const myInterval = setInterval(function() {
  console.log("Here is message number " + i);
  i = i + 1;
}, 2000);

console.log(myInterval);

setTimeout(function() {
  clearInterval(myInterval);
}, 10000);
