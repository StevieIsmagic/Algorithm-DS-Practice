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
