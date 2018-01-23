class User {
	constructor({ email, password }) {
    this.email = email;
    this.password = password;
  }
  
  verifyPassword(passwordToCheck) {
    return passwordToCheck === this.password;
  }
}

const newUser = new User({
	email: 'asdf@gmail.com',
	password: 'asdf'
});

console.log(newUser, newUser.verifyPassword('qwerty')); // false

const newUser2 = new User({
  email: 'addsf',
  password: 'asdf'
});

console.log(newUser2, newUser2.verifyPassword('asdf')); // true

/* 2. if 'this' is not bound to anything, it refers to the global object */

function foo() {
  console.log(this);
}

foo() // will log the global object

/* 
3. manually set the 'this' object reference 
Use .call() or .apply() when you want to invoke the function
immediately,WITH MODIFICATION of the context. These two ARE THE SAME
except that when using .apply(), arguments are passed as an array list. 
*/
foo.call({ message: 'hello world' }, true, null, 'hello');
foo.apply({ message: 'hello world' }, [true, null, 'hello']);
/* 
Use bind when you want that function to later be called with
a certain context; useful in events.
*/
const boundFoo = foo.bind({ message: 'hello world' });

/* 4. when 'new' keyword is being used, 'this' refers to the new object being created */

const user = new User3({
  email: 'asd@gmail.com',
  password: 'asd'
});

console.log(user);

// a static method is one that attaches the function to the class, not the instance of the class

class User {
	constructor({ email, password }) {
    this.email = email;
    this.password = password;
  }
  
  static sayHi() {
    console.log('hi');
  }

}
// will need to invoke using capital U- User
User.sayHi();








