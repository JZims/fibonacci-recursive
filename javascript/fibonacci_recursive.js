function fibonacci(n) {
  //Base case limits 1 or 0 to return itself
  if(n < 2) return n

  //Fibonacci of n subtracts until the base case is met, returning the sum for each call
  //Return the sum of the two numbers before 
  return fibonacci(n - 1) + fibonacci(n - 2)
  
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution
