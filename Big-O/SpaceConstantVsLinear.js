/* NOTE: BOTH ARE O(N) TIME COMPLEXITY
...since they take N steps for N data elements. However the first version
is more memory efficient, being O(1) in space complexity compared to the first version's O(N).
*/

/* Constant O(1) Space Complexity - IN PLACE 
We do not create any new arrays / variables.  Instead we modify each string
within the original array in place, making them uppercase one at a time. We 
then return the modified string. The memory consumed does not increase, thus 
remains constant no matter how large the data set - O(1) Space Efficiency
*/

function makeUpperCase(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i].toUpperCase();
  }
  return array;
}

/* Linear O(N) Space Complexity
We accept an array, and create a brand new array and fill it with uppercase versions
of the initial array. By the time the function is complete, we have two arrays floating 
around in our computer's memory. This creates an O(N) linear space efficiency.

*/

function makeUpperCase(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray[i] = array[i].toUpperCase();
  }
  return newArray;
}

/* *************   TRADEOFFS BETWEEN TIME + SPACE  *************** */

// #1
function hasDuplicateValue(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; i++) {
      if (i !== j && array[i] === array[j]) {
        return true;
      }
    }
  }
  return false;
}

// #2
function hasDuplicateValue(array) {
  let existingNumbers = [];
  for (let i = 0; i < array.length; i++) {
    if (existingNumbers[array[i]] === undefined) {
      existingNumbers[array[i]] = 1;
    } else {
      return true;
    }
  }
  return false;
}

/*
Indeed from time alone, the Second Version (#2) is much FASTER. But when we take SPACE TIME into account,
we find the Second Version (#2) has a disadvantage. The First Version (#1) does not consume any additional 
memory beyond the original array and so has a SPACE COMPLEXITY OF O(1) - CONSTANT. 
On the other hand, this Second Version (#2) creates a brand-new array that is the same size 
as the original, therefore has a SPACE COMPLEXITY O(N) - LINEAR 

Version       Time Complexity     Space Complexity
   # 1             O(N^2)               O(1)
   # 2             O(N)                 O(N)

CONCLUSION: 
So #1 takes less memory but is slower, while #2 is 
faster but takes up more memory. How do we decide
which to choose?

Depends on the situation....
*/
