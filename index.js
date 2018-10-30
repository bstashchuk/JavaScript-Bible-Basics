let myVariable;

console.log(myVariable); // undefined

myVariable = 10;

console.log(myVariable); // 10

myVariable = true;

console.log(myVariable); // true

myVariable = {
  x: true,
  y: 10
};

console.log(myVariable); // {x: true, y: 10}

myVariable.y = 20;

console.log(myVariable); // {x: true, y: 20}

// // THIS WILL BREAK THE CODE
// myVariable = null;

myVariable.x = false; // Uncaught TypeError: Cannot set property 'x' of null

console.log(myVariable); // {x: false, y: 20}