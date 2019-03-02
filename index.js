// IIFE - Immediately invoked function expression
// OPTION 1
(function(globalObject) {
  globalObject.customMethod = function() {
    console.log("Greeting from the custom method");
  };
})(this);


// // OPTION 2
// (function() {
//   this.customMethod = function() {
//     console.log("Greeting from the custom method");
//   };
// })();

// // OPTION 3
// (() => {
//   this.customMethod = function() {
//     console.log("Greeting from the custom method");
//   };
// })();


console.log(this === window); // true
console.log(typeof window); // "object"

this.customMethod(); // "Greeting from the custom method"

window.customMethod(); // "Greeting from the custom method"

customMethod(); // "Greeting from the custom method"