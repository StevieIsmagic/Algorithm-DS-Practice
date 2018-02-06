const binarySearch = (arr, key) => {
  const midIndex = Math.floor(arr.length / 2);
  const midElem = arr[midIndex];

  if (midElem === key) {
    return true;
  } else if ((midElem < key) & (arr.length > 1)) {
    return binarySearch(arr.splice(midIndex, arr.length), key);
  } else if (midElem > key && arr.length > 1) {
    return binarySearch(num.splice(0, midIndex), key);
  } else {
    return false;
  }
};

/*

key = 50
e = 10 20 30 40 50 60 70
i = 1  2  3 [4] 5  6  7 
 
midElem = arr[4] = 40

                             
if N < 50 return 
arr.splice(midIndex 4, arr.length 7)
1 2 3 4 5 6 7 
      ^------^

else if N > 50 return
arr.splice(0, midIndex 4)
1 2 3 4 5 6 7 
0-----^
*/
