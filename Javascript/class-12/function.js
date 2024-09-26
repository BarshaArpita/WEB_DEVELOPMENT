// Function :
// Function is a reusable block of code to perform a particular task.
// It can take arguments and return values.
// Function can be defined inside or outside another function.
// Function can be passed as an argument to another function.
// Function can be called multiple times in a program.
// Function can be used to create a loop or recursion.
// Function can be used to create a class or object.
// Function can be anonymous(Without a name).
// Function can be used to create a closure.
// Function can be used to create a higher-order function.

// Syntax:
// function name(params) {
// code to be executed
// }

// Examples :
function greetings() {
    // To print
    console.log("Hello, World!");
  }
  
  // Call or invoke
  // greetings(); // Output: Hello, World!
  
  // Write a function to add two different numbers
  // function add(num1, num2) {
  //   console.log(`The addition result is ${num1 + num2}`);
  // }
  
  // add(5, 8); // Call or invoke
  
  // Default parameters
  
  let num1 = 5;
  let num2 = 4;
  let num3 = 7;
  let result = num1 + num2 + num3;
  
  function add(output = 0) {
    console.log(`The addition result is ${output}`);
  }
  
  // add(result); // Call or invoke
  
  // return keyword in a function :
  // The return keyword is used to exit a function and return a value to the caller.
  
  // Write a function to check  even number
  function isEven(num) {
    if (num % 2 === 0) {
      return "Even"; // stop the execution
      console.log("Please start");
    } else {
      return "Odd";
    }
  }
  
  // isEven(8); // invoke or call
  // console.log(isEven(-90));
  let output = isEven(25);
  // console.log(output);
  
  // IIFE(Immediately Invoked Function Expression)
  // IIFE is a function that runs as soon as it is defined.
  // It is used to create a scope for the variables and functions defined inside it.
  // It is used to prevent the global namespace pollution.
  
  // Syntax:
  // (function() {
  // code to be executed
  // })();
  
  // Example:
  // (function () {
  //   console.log("Hey , I am an IIFE");
  // })();
  
  // Scope :
  // Scope is the region of the code where a variableis defined.
  // A `global variable` can be accessible in block scope but `a variable in block scope` can't be accessible in global scope
  
  let z = 30; // global scope
  // console.log(x + y + z);
  
  function scope() {
    let x = 10; // block scope
    let y = 20; // block scope
      console.log(x + y + z);
  }
  // scope();
  
  function secondOne() {
    let w = 50;
    console.log(w + z);
  }
  // secondOne();