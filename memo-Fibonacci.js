/* DYNAMIC PROGRAMMING - OVERLAPPING SUBPROBLEMS */

/* 
A problem has overlapping subproblems if finding its solution involves
solving the same subproblem multiple times.

As an example, let's look at the Fibonacci sequence (the series where 
each number is the sum of the two previous ones -0,1,1,2,3,5,8,13...)
*/

// If we wanted to compute the nth Fibonnacci number, we could use the
// simple recursive algorithm:
function fib(n) {
  if (n < 2) return n;

  return fib(n - 1) + fib(n - 2);
}

/* We'd call fib(n-1) and fib(n-2) SUBPROBLEMS of fib(n)

                                 fib(5)
                  fib(4)                       fib(3)
           fib(3)      fib(2)            fib(2)    fib(1)
      fib(2) fib(1) fib(1) fib(0)    fib(1) fib(0)         
  fib(1) fib(0)

Our function ends up calling fib(2) THREE TIMES. So the problem of finding
the nth Fibonacci has overlapping subproblems.
*/

/* ******************   MEMOIZATION    *************************
Memoization ensures that a function does not run for the same inputs
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
(as with the Fibonacci problem above.) The other strategy for dynamic programming problems
is going *bottom-up*, which is usually cleaner and often more efficient.
*/

/*  ******************  BOTTOM-UP ALGORITHMS    *************************

Going bottom-up is a way to avoid recursion, saving the memory cost that recursion
incurs when it builds up the call stack.

Put simply, a Bottom-Up algorithm * Starts From The Beginning *, while a Recursive algorithm
often  * starts from the end and works backwards * .
*/

// For example, if we wanted to multiply all the numbers in the range 1..n,
// we could use this concise recursive one-liner:
function product1ToN(n) {
  // we assume n >= 1
  return n > 1 ? n * product1ToN(n - 1) : 1;
}

/* This approach has a problem: it builds up a call stack of size O(n), which makes
our total memory cost 0(n). This makes it vulnerable to a stack overflow error, where
the call stack gets too big and runs out of space.
*/

// To aviod this, we can instead go bottom-up
// this approach uses O(1) space / O(n) time
function product1ToN(n) {
  // we assume n >= 1
  let result = 1;
  for (let num = 1; num <= n; num++) {
    result *= num;
  }

  return result;
}
/* 
Going Bottom-Up is a common strategy for dynamic programming problems,
which are problems where the solution is composed of solutions of the same problem
with smaller inputs (as with multiplying the numbers 1..n, above) The other common 
strategy for dynamic programming problems is Memoization.
*/
