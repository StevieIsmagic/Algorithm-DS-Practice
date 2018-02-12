// Quadratic O(n^2)

// for N elements in the array, how many steps would our Alg take in a worst case scenario?
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

// Linear Solution O(n)
