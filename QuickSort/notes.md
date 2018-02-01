<!-- Expected function: `quickSort`

Implement the quick sort sorting algorithm. Assume the input is an array of integers.

https://en.wikipedia.org/wiki/Quicksort

https://www.khanacademy.org/computing/computer-science/algorithms#quick-sort

Required for submission:

```
module.exports = {
  quickSort
}
```

--- -->

# Quick Sort Fun Facts

C library function qsort() is a quick sort variant called quicker sort

Belongs to Divide and Conquer Family - Multi-branched Recursion
(e.g., Mergesort, Binary Search, MapReduce, etc.)

Break the problem into subproblems that are similar to the original problem. Three(3) Steps:

* Divide
* Conquer
* Combine

# Big O

* Best Case Time Complexity- O(N log N)
* Average Case Time Complexity- O(N log N)
* Worse Case Time Complexity- O(N^2)

#### What would cause a worst case O(N^2) scenario... ?

* An inversely sorted array [5, 4, 3, 2, 1]

<!-- # Recursive Solution

Base Case: ?

Partition step - take a random number from the array. This is your pivot. Every number less than pivot goes to left, every number greater than pivot goes to right. -->
