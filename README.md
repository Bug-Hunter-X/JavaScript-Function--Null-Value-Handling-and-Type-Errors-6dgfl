# JavaScript Function: Null Value Handling and Type Errors

This repository demonstrates a common error in JavaScript functions: improper null handling and a lack of type checking.  The `foo` function correctly handles `null` inputs by returning `null`, but it doesn't explicitly handle potential type errors if non-numeric values are passed as arguments.  This can lead to unexpected behavior or runtime errors.

The `bug.js` file contains the problematic code. The `bugSolution.js` file provides a more robust solution.

## Bug
The original function lacks explicit type checking and error handling for non-numeric inputs.

## Solution
The improved version adds type checking using `typeof` and throws an error if invalid input types are detected.