/// JavaScript 

// ------------------ Interpretation & Execution ------------------
// JavaScript is an interpreted language, executed line-by-line.
// It runs in various environments: browsers, Node.js, etc.
// If there is an error in one line, the following lines will not execute
console.log("Interpretation");
console.log("Line 1 executed"); 
console.log("Line 2 executed"); 
console.log();

// ---------------------- Dynamic Typing ----------------------
// Variables can hold any type and can change types.
console.log("Dynamic Typing Example:");
let variable = 42;
variable = "text";
console.log(typeof variable, variable);
console.log(); 

// ---------------------- Weakly Typed ----------------------
// JavaScript performs implicit type conversion.
console.log("Weakly Typed Example:");
console.log("5" + 3); 
console.log("5" - 3); 
console.log();

// ----------------------- Single-threaded -----------------------
// JavaScript runs in a single thread, executing one command at a time.
console.log("Single-threaded Example:");

// ---------------------- Asynchronous and Non-blocking ----------------------
// Asynchronous operations (like setTimeout, Promises) allow non-blocking behavior. 
console.log("Start");
setTimeout(() => {
  console.log("This executes after 2 seconds");
}, 2000);
console.log("End");
console.log();

// ---------------------- JSON Compatibility ----------------------
// JSON (JavaScript Object Notation) is a lightweight data-interchange format.
console.log("JSON Compatibility Example:");
let jsonString = '{"name": "Alice", "age": 30}';
let jsonObject = JSON.parse(jsonString); // Convert JSON string to object
console.log(jsonObject.name); // Alice
console.log(jsonObject.age); // 30
console.log();

// ---------------------- Arrow Functions ----------------------
// Concise syntax for writing functions.
console.log("Arrow Functions Example:");
const add = (a, b) => a + b;
console.log(add(2, 3));

// Difference in scope between regular function and arrow function
function regularFunction(param) {
  console.log("Regular function:", param);
}

const arrowFunction = (param) => {
  console.log("Arrow function:", param);
};

const obj = {
  name: "Example",
  regularFunction,
  arrowFunction,
};

obj.regularFunction("Hello from regular function"); // 'param' refers to function scope
obj.arrowFunction("Hello from arrow function"); // 'param' refers to global scope




