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
