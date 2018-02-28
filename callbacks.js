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

/* `THIS` - (1) PROBLEM WHEN USING METHODS WITH THE `this` OBJECT AS CALLBACKS

https://youtu.be/zE9iro4r918 

When the callback function is a method that uses the `this` object, we have
to modify how we execute the callback function to preserve the `this` object
context. Or else the `this` object will EITHER (1) point to the global window object
(in the browser), if cb was passed to a global function (2) Or it will point to
the object of the containing method.
Let's explore this in code:
*/

// define an object with some properties and a method
// we will later pass the method as a cb f(x) to another f(x)
var clientData = {
  id: '123654',
  fullName: 'Not Set',
  //setUserName is a method on the clientData object
  setUserName: function(firstName, lastName) {
    // `this` refers to the fullName property in this object
    this.fullName = firstName + '' + lastName;
  }
};

function getUserInput(firstName, lastName, callback) {
  // do other stuff to validate firstName/lastName here

  // now save the names
  callback(firstName, lastName);
}

/* ^^^^ In the following code example, when clientData.setUserName is executed,
this.fullName will not set the fullName property on the clientData object.
Instead, it will set fullName on the WINDOW object, since getUserInput is 
a GLOBAL f(x). This happens because the `this` object in the global f(x)
points to the WINDOW OBJECT.
*/

getUserInput('Barack', 'Obama', clientData.setUserName);
console.log(clientData.fullName); // Not Set

//The fullName property was initialized on the window object
console.log(window.fullName); // Barack Obama

/* (2) USE THE `CALL` OR `APPLY` FUNCTION TO PRESERVE `this`

We can fix the preceding problem by using the `CALL` or `APPLY` function.
Know that every f(x) in Javascript has two methods: CALL / APPLY. These 
methods are used to set the `this` object inside the function and to pass
arguments to the functions.

`CALL` takes the value to be used as the `this` object inside the function as
the first parameter, and the remaining arguments to be passed to the function
are passed individually (separated by commas, of course). The `APPLY` function's
first parameter is also the value to be used as the `this` object inside the
function, while the last parameter is an array of values (or the arguments object)
to pass to the function.

This sounds complex, but let's see how easy it is to use `APPLY` or `CALL`.
To fix the problem in the previous example, we will use the `APPLY` f(x) : 
*/

//Note that we have added an extra parameter for the callback object
//called 'callbackObj'
function getUserInput(firstName, lastName, callback, callbackObj) {
  // Do other stuff to validate name here

  //The use of `Apply` below will set the `this` object to be callbackObj
  //                `this`         `this` parameters
  callback.apply(callbackObj, [firstName, lastName]);
}

/* with the `APPLY` f(x) setting the `this` object correctly, we can now
correctly execute the callback and have it set the fullName property
correctly on the clientData object:
*/

//we pass the clientData.setUserName method and the clientData object as
//parameters. The clientData object will be used by the `APPLY` f(x) to
// set the `this` object.
getUserInput('Barack', 'Obama', clientData.setUserName, clientData);

//the fullName property on the clientData was correctly set
console.log(clientData.fullName); // Barack Obama

// We would have also used the `CALL` f(x), but in this case we used `APPLY`

/* MULTIPLE CALLBACK FUNCTIONS ALLOWED
We can pass more than one cb f(x) into the parameter of a f(x)
just like we can pass more than one variable. Here is a classic example with
jQuery's AJAX f(x)
*/

function successCallback() {
  // do stuff before send
}
function successCallback() {
  // do stuff if success message recieved
}
function completeCallback() {
  // do stuff upon completion
}
function errorCallback() {
  // do stuff if error recieved
}

$ajax({
  url: 'http://fiddle.jshell.net/favicon.png',
  success: successCallback,
  complete: completeCallback,
  error: errorCallback
});

/* CALLBACK HELLP PROBLEM AND SOLUTION
In asynchronous code execution, which is simply execution of code in any order, 
sometimes it is common to have numerous levels of callback functions to the 
extent that you have code that looks like the following. The messy code below 
is called callback hell because of the difficulty of following the code due to
the many callbacks. I took this example from the node-mongodb-native, a MongoDB 
driver for Node.js. The example code below is just for demonstration:
*/

var p_client = new Db('integration_tests_20', new Server("127.0.0.1", 27017, {}), {'pk':CustomPKFactory});
p_client.open(function(err, p_client) {
    p_client.dropDatabase(function(err, done) {
        p_client.createCollection('test_custom_key', function(err, collection) {
            collection.insert({'a':1}, function(err, docs) {
                collection.find({'_id':new ObjectID("aaaaaaaaaaaa")}, function(err, cursor) {
                    cursor.toArray(function(err, items) {
                        test.assertEquals(1, items.length);
​
                        // Let's close the db​
                        p_client.close();
                    });
                });
            });
        });
    });
});

/* HERE ARE (2) SOLUTIONS TO THIS PROBLEM
(1) Name your functions and declare them and pass just the function as a cb(),
instead of defining an anonymous function in the parameter of the main f(x).
(2) Modularity: Separate your code into modules, so you can export a section
of code that does a particular job. Then you can import that module into 
your larger application.
*/ 

