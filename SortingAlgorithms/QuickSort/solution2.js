function quickSort(nums) {
  const arr = nums.slice(); // slice without param returns entire array
  if (nums.length < 2) return nums;

  const lo = [];
  const hi = [];
  const mid = Math.floor(arr.length / 2); // [1,2,3,4,5,6] mid = 3
  const pivot = arr.splice(mid, 1); // arr[3] >> 4

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= pivot[0]) {
      lo.push(arr[i]);
    } else {
      hi.push(arr[i]);
    }
  }
  return [].concat(quickSort(lo), pivot, quickSort(hi));
}

const arr1 = [0, 1, 2, 3, 4, 5, 6];
const arr2 = [9, 8, 7, 6, 5, 4, 3];
const arr3 = [1, 5, 5, 5, 5, 5, 9];
const arr4 = [55, -5, -10, 4];
