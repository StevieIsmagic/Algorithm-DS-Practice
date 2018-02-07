/* ***********   PRE-ES-6 ***********/

/* Factory Pattern */

var peopleFactory = function(name, age, state) {
  var temp = {};

  temp.age = age;
  temp.name = name;
  temp.state = state;

  temp.printPerson = function() {
    console.log(this.name + ', ' + this.age + ', ' + this.state);
  };

  return temp;
};

var person1 = peopleFactory('Stevie', 27, 'CA');
var person2 = peopleFactory('Karen', 33, 'FL');

person1.printPerson();
person2.printPerson();

/* Constructor Pattern */

/* Prototype Pattern */
