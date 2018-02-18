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

// ELECTRIC VOTING MACHINE - TALLY CANDIDATES

// 1. O(1) insertion - but we end up with a very long array
const votes = [];

function addVote(candidate) {
  votes.push(candidate);
}

// And what about the final vote tally? Since we have to count each vote,
// the countVotes() function takes O(N) - linear

function countVotes(votes) {
  const tally = {};
  for (let i = 0; i < votes.length; i++) {
    if (tally[votes[i]]) {
      tally[votes[i]++];
    } else {
      tally[votes[i]] = 1;
    }
  }
  return tally;
}

//Consider using a hash table to store the data to begin with. With this technique
//not only are insertions O(1), but out tally is O(1) as well since tally is already kept;
const votes = {};

function addVote(candidate) {
  if (votes[candidate]) {
    votes[candidate]++;
  } else {
    votes[candidate] = 1;
  }
}
function countVotes(votes) {
  return votes;
}

/* EVEN OCCURENCES
Find the first item that occurs an even number of times in an array.
Remember to handle multiple even-occurrence items and return the first one.
Return null if there are no even-occurrence items.
*/
function evenOccurence(array) {
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      obj[arr[i]]++;
    } else {
      obj[arr[i]] = 1;
    }
  }
  for (let j = 0; j < arr.length; j++) {
    if (obj[arr[j]] % 2 === 0) {
      return arr[j];
    }
  }
  return null;
}

/* BALANCED BRACKETS

*/
