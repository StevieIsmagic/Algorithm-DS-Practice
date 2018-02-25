// global variable
var allUserData = [];

// generic logStuff function that prints to console
function logStuff(userData) {
  if (typeof userData === 'string') {
    console.log(userData);
  } else if (typeof userData === 'object') {
    for (var item in userData) {
      console.log(item + ': ' + userData[item]);
    }
  }
}

// a function that takes two parameters, the last one a cb f(x)
function getInput(options, callback) {
  allUserData.push(options);
  callback(options);
}

//When we call the getInput function, we pass logStuff as a parameter.
// So logStuff will be the function that will be called back
// (or executed) inside inside the getInput function
getInput({ name: 'Stevie', specialty: 'Eating cheetos' }, logStuff);
// name: Stevie
// specialty: Eating Cheetos

/* *** PASS PARAMETERS TO CALLBACK F(x)s *** 
Since the callback function is just a normal function when it is executed,
we can pass parameters to it. We can pass any of the containing function's 
properties (or global properties) as a parameter to the cb f(x). In the 
preceding example, we pass `options` as a parameter to the cb f(x).
Let's pass a global variable and a local variable:
*/

//Global variable
var generalLastName = 'Magic';

function getInput(options, callback) {
  allUserData.push(options);
  //          global var    local var
  callback(generalLastName, options);
}

/* MAKE SURE CB() IS A F(x) BEFORE CALLING IT 
It is always wise to check that teh cb f(x) passed in the parameter
is indeed a function before calling it. Also, it is good practice to make the 
cb f(x) optional. Let's refactor the `getInput` function from the previous
example to ensure these checks are in place. 
*/

function getInput(options, callback) {
  allUserData.push(options);

  //Make sure the callback is a function
  if (typeof callback === 'function') {
    // Call it, since we have confirmed it is callable
    callback(options);
  }
}

/* Without the check in place, if the `getInput` function is called either
without the callback function as a parameter or in place of a function
a non-function is passed, our code will result in a runtime error.
*/

/* PROBLEM WHEN USING METHODS WITH THE `this` OBJECT AS CALLBACKS
When the callback function is a method that uses the `this` object, we have
to modify how we execute the callback function to preserve the `this` object
context. Or else the `this` object will EITHER (1) point to the global window object
(in the browser), if cb was passed to a global function (2) Or it will point to
the object of the containing method.
Let's explore this in code:
*/
