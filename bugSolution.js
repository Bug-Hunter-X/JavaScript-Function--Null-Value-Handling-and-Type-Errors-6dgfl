function foo(a, b) {
  // Check if inputs are numbers using typeof
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Invalid input type. Both parameters must be numbers.');
  }

  if (a === null || b === null) {
    return null; // Handle null values
  }
  return a + b;
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: null
console.log(foo(1, null)); // Output: null
console.log(foo(null, null)); // Output: null

//Example of error handling
try{
    console.log(foo('abc', 2));
} catch(error){
    console.log(error); // Output: Error: Invalid input type. Both parameters must be numbers.
}

