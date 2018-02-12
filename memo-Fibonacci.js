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

  console.log(`computing fib(${n})`);
  let result = this.fib(n - 1) + this.fib(n - 2);

  //memoize
  this.memo[n] = result;

  return result;
};

/* 
Memoization is a common strategy for dynamic programming problems, which are problems
where the solution is composed of solutions to the same problem with similar inputs
(as with the Fibonacci problem above.) The otehr strategy for dynamic programming problems
is giong *bottom-up*, which is usually cleaner and often more efficient.
*/

/* BOTTOM-UP ALGORITHMS 

Going bottom-up is a way to avoid recursion, saving the memory cost that recursion
incurs when it builds up the call stack.

Put simply, a bottom-up algorithm 'starts from the beginning', while a recursive algorithm
often 'starts from the end and works backwards'
*/
