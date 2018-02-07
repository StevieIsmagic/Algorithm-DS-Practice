/* ***********  OBJECT CREATION PRE-ES6 ***********/

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

var peopleConstructor = function(name, age, state) {
  this.name = name;
  this.age = age;
  this.state = state;

  this.printPerson = function() {
    console.log(this.name + ', ' + this.age + ', ' + this.state);
  };
};

// unlike factory pattern, since we arent returning any object
// we have to create an object from the peopleConstructor object itself
// so we must use a Constructor...this behaves like a class constructor
// similar to Java + ES6

var person1 = new peopleConstructor('Stevie', 27, 'CA');
var person2 = new peopleConstructor('Karen', 29, 'FL');

person1.printPerson();
person2.printPerson();
// the problem with this is that each time a person object is created,
// it carries all of the properties containted in its conctructor
// AKA each will have its own printPerson method.
// Prototype pattern helps reduce this overhead

/* Prototype Pattern */

var peopleProto = function() {};
// adding default values to the prototype of our peopleProto function
peopleProto, (prototype.age = 0);
peopleProto.prototype.name = 'no name';
peopleProto.prototype.state = 'no state';

peopleProto.prototype.printPerson = function() {
  console.log(this.name + ', ' + this.age + ', ' + this.state);
};

var person1 = new peopleProto();
// we will override default property values after constructing person1
person1.name = 'Stevie';
person1.age = 27;
person1.state = 'CA';

person1.printPerson();
