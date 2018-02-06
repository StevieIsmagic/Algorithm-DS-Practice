function quickSort(nums) {
  const arr = nums.slice();
  if (nums.length < 2) return nums;

  const lessThanOrEqualToPivot = [];
  const greaterThanPivot = [];
  const middleIndex = Math.floor(arr.length / 2); // mid = 3
  const pivot = arr.splice(middleIndex, 1); // arr.splice(2, 1)

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= pivot[0]) {
      lessThanOrEqualToPivot.push(arr[i]);
    } else {
      greaterThanPivot.push(arr[i]);
    }
  }

  return [].concat(
    quickSort(lessThanOrEqualToPivot),
    pivot,
    quickSort(greaterThanPivot)
  );
}

const arr1 = [0, 1, 2, 3, 4, 5, 6];
const arr2 = [9, 8, 7, 6, 5, 4, 3];
const arr3 = [1, 5, 5, 5, 5, 5, 9];
const arr4 = [55, -5, -10, 4];

module.exports = {
  quickSort
};
