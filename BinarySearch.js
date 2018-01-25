
// binary tree 15-steps on PythonTutor
const binarySearch = (numArray, key) => {
  const middleIndex = Math.floor(numArray.length / 2);
  const middleElem = numArray[middleIndex];

  if (middleElem === key) {
    return true;
  } else if (middleElem < key & numArray.length > 1) {
  return binarySearch(numArray.splice(middleIndex, numArray.length), key);
  } else if (middleElem > key && numArray.length > 1) {
    return binarySearch(numArray.splice(0, middleIndex), key);
  } else {
    return false;
  }
}

/* ******************************************* */ 


// Binary 19-steps on PythonTutor Analyze the difference between these two

const binarySearch = (A, searchTerm) => {
  /* binary search requires your input array to already be sorted. This algorithm takes in two parameters, an Array and a searchTerm. The function works by guessing a place in the array, if guess is too high, then we know that anything above the guess is too high too (hi = guess-1). If the guess is too low, then we know that anything below the guess is too low as well (low = guess + 1) 
    initialize hi, lo, mid, guess;
    while (lo <=hi) have not converged on the middle point, continue guessing and coverging the hi/lo points
    if the lo/hi converge, that means that our search term is not in the given array, so return null/false/etc
    binary search has an O(logN) time complexity, since the size of N is reduced by half upon each iteration
*/

  let lo = 0;
  let hi = A.length-1;
  
  while (lo <= hi) {
    let mid = Math.floor((hi+lo) / 2);
    let guess = A[mid];
    if(guess === searchTerm) {
      return ("YEEEES >>>", true);
    } else if ( guess >= searchTerm && A.length > 1) {
      hi =  mid - 1;
    } else if (guess <= searchTerm && A.length > 1) {
      lo = mid + 1;
    }
  }
  
    return false;
};


let Arr = [ 1,2,3,4,5,6];

console.log(binarySearch(Arr, 5));
