/*
in JS, an object is a hash table. 

Consider the following examples:
*/

// Write function that tells whether any duplicate occurs in array.
//1. Nested ForLoop - this solution is O(N^2)

//2. this O(N) solution will only work for integers

//3. Hash table (Object) O(N) - this solution will work for both integers and strings
function hasDuplicateValue(array) {
  const existingValues = {};
  for (let i = 0; i < array.length; i++) {
    if ((existingValues[array[i]] = undefined)) {
      existingValues[array[i]] = 1;
    } else {
      return true;
    }
  }
  return false;
}
