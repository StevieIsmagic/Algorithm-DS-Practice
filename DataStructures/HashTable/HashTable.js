/* HASH TABLES - O(1) average lookup time

Hash tables perform a consistent balancing act. They must strike a balance
between avoiding a collisions while not consuming lots of memory.

To accomplish this, computer scientists have developed the following rule of thumb:
For every seven (7) data elements, stored in a hash table, the table should have ten (10) cells.

This ratio of data 
In JS, an object IS a hash table. 


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
