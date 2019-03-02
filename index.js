// CHALLENGE
// Create a function that will add custom method to the global object "window"
function addCustomGlobalMethod(globalObject) {
  globalObject.customMethod = function() {
    console.log("Greeting from the custom method");
  };
}

addCustomGlobalMethod(this);
console.log(this === window); // true
console.log(typeof window); // "object"

this.customMethod(); // "Greeting from the custom method"

window.customMethod(); // "Greeting from the custom method"

customMethod(); // "Greeting from the custom method"