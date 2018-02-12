// Quadratic Time O(N^2)

/* for N elements in the array, how many steps would our Alg take in a worst case scenario?

we conclude that for N elements in the array, our function would perform N^2 comparisions,
since we perform an outer loop that must iterate N times to get through the entire array,
and for each iteration, we must iterate another N times with our inner loop. That's 
N steps * N steps, which is otherwise known as N^2 steps = O(N^2).
*/
function hasDuplicateValue(array) {
  let steps = 0; // use this to compare # of steps
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      steps++;
      if (i !== j && array[i] === array[j]) {
        return true;
      }
    }
  }
  console.log(steps);
  return false;
}

// Linear Time Solution O(N) - makes N comparisons for N data elements

function hasDuplicateSteps(array) {
  let steps = 0;
  let existingNumbers = [];
  for (let i = 0; i < array.length; i++) {
    steps++;
    if (existingNumbers[array[i]] === undefined) {
      existingNumbers[array[i]] = 1;
    } else {
      return true;
    }
  }
  console.log(steps);
  return false;
}

/* 
this implementation uses an array called existingNumbers in an interesting way:
Every time the code encounters a new number, it stores the value 1 inside the index of 
the existingNumbers corresponding to that number. If it checks an index, and it finds
the number 1, it means we a;ready encountered that number before.

Example: if given the array [3,5,7], by the end of the loop, existingNumbers
array will look like this > [undef, undef, 1, undef, 1, undef, 1]

*/
