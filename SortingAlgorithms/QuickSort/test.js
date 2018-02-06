const {
  quickSort
} = require('./submission');

describe("UnitTests", function () {

  it("should_return_an_array", function () {
    // Failure message: 
    expect(Array.isArray(quickSort([0]))).toEqual(true);
  });
  it("should_sort_an_array", function () {
    // Failure message:
    // [0,1,2,3,4,5,6
    // [9,8,7,6,5,4,3]
    expect(quickSort([0, 1, 2, 3, 4, 5, 6])).toEqual([0, 1, 2, 3, 4, 5, 6]);
    expect(quickSort([9, 8, 7, 6, 5, 4, 3])).toEqual([3, 4, 5, 6, 7, 8, 9]);
  });
  it("should_be_able_to_handle_multiple_occurrences_of_same_number", function () {
    // Failure message:
    // [9,5,5,5,5,5,1]
    expect(quickSort([9, 5, 5, 5, 5, 5, 1])).toEqual([1, 5, 5, 5, 5, 5, 9]);
  });
  it("should_be_able_to_handle_negative_numbers", function () {
    // Failure message:
    // [55,-5,-10,4]
    expect(quickSort([55, -5, -10, 4])).toEqual([-10, -5, 4, 55]);
  });
});