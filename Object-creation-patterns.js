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

/* Regular Prototype Pattern */

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

/* Dynamic Prototype Pattern */

var peopleDynamicProto = function(name, age, state) {
  this.age = age;
  this.name = name;
  this.state = state;

  // the printPerson method will only be created and added to the prototype
  // when the first peopleDynamicProto object is created
  // all other objects will not create this method
  if (typeof this.printPerson !== 'function') {
    peopleDynamicProto.prototype.printPerson = function() {
      console.log(this.name + ', ' + this.age + ', ' + this.state);
    };
  }
};

var person1 = new peopleDynamicProto('Stevie', 27, 'CA');

person1.printPerson();

/* ********** OBJECT CREATION USING ES6 CLASSES *********** */ 

// BEFORE
function User(options) {
  this.email = options.email;
  this.password = options.password;
}

User.prototype.sayHi = function() {
  console.log('hi!');
};

/* ES6 CLASSES */

// AFTER
class User {
  constructor(options) {
    this.email = options.email;
    this.password = options.password;
  }
  // User.prototype.sayHi
  sayHi() {
    console.log('hi');
  }
}

const user1 = new User({
  email: 'Stevie@gmail.com',
  password: 'asdffhg',
});

/* Practice bulding Classes */ 
class User {
  constructor(options) {
    this.email = options.email;
    this.password = options.password;
  }
}