function quickSort(nums) {
  const arr = nums.slice(); // [1,2,3,4,5]
  if (nums.length < 2) return nums;

  const lessThanOrEqualToPivot = [];
  const greaterThanPivot = [];
  const middleIndex = Math.floor(arr.length / 2); //
  const pivot = arr.splice(middleIndex, 1);

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
