// CHALLENGE
// Create a function "waitingFn" with single parameter "timeInMs" and inside of the function create "while" loop and this loop should be running during "timeInMs".
// HINT: Date.now() - current time in ms since 1970
function waitingFn(timeInMs) {
  const futureTime = Date.now() + timeInMs;
  while (futureTime > Date.now()) {
    // waiting...
  }
}

waitingFn(3000);

console.log("Function call has just ended");