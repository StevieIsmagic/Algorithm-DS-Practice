/*
Memoization ensures that a function does not rum for the same inputs
more than once (by keeping a record of the results for the given inputs)
These results are usually stored in an object.
*/

function Fibber() {
  this.memo = {};
}

Fibber.prototypefib = function(n) {
  if (n < 0) {
    throw new Error(
      'Index was negative. No such thing as a negative index in a series.'
    );
    // base cases
  } else if (n === 0 || n === 1) {
    return n;
  }
  // see if we've already calculated this
  if (this.memo.hasOwnProperty(n)) {
    console.log(`grabbing memo [${n}]`);
    return this.memo[n];
  }
};
