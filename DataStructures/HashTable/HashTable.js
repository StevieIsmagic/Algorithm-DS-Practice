/* HASH TABLES - O(1) average lookup time

Hash tables perform a consistent balancing act. They must strike a balance
between avoiding a collisions while not consuming lots of memory.

To accomplish this, computer scientists have developed the following rule of thumb:
For every seven (7) data elements, stored in a hash table, the table should have ten (10) cells.

This ratio of data to cells is called the ~ Load Factor ~ . Using this terminology, we'd say
that the ideal load factor is 0.7 (7 elements / 10 cells).
 
In JS, an object IS a hash table. 

NOTE: HASH TABLES ARE PERFECT FOR WHEN WE WANT TO KEEP TRACK OF WHICH VALUES EXIST WITHIN A DATA SET.

Consider the following examples:
*/

// Write a function that tells whether any duplicate occurs in array:
//1. Nested ForLoop - this solution is O(N^2)
function hasDuplicateValue(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (i !== j && array[i] === array[j]) {
        return true;
      }
    }
  }
  return false;
}

//2. this O(N) solution will only work for integers
function hasDuplicateValue(array) {
  const existingValues = [];
  for (let i = 0; i < array.length; i++) {
    if ((existingValues[array[i]] = undefined)) {
      existingValues[array[i]] = 1;
    } else {
      return true;
    }
  }
  return false;
}

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
