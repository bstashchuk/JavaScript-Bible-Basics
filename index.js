// Callbacks, events, events queue, execution contexts stack, Web APIs
function waitingFn(timeInMs) {
  const futureTime = Date.now() + timeInMs;
  while (futureTime > Date.now()) {
    // waiting...
  }
}

setTimeout(() => console.log("Callback is executed"), 0);

waitingFn(5000);

console.log("Last statement in the global execution context");