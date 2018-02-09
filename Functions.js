/* FUNCTION DEFINITIONS - REFER TO MDN DOCS*/

/* Function Declaration */

// this function has a name 'multiplyByTwo'
function multiplyByTwo(x) {
  return x * 2;
}

/* Function Expression */

// the function keyword can be used to define a function inside an expression
// when function name is omitted, an anonymous f(x) is created.
var anonMultiplyByTwo = function(x) {
  return x * 2;
};

/* if a function has a name, then it's a F(x) DECLARATION
this is important because of HOISTING. When web browser loads 
a webpage, the F(x) declaration will be created at different time than expression.
*/
