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

/* if 'this' is not bound to anything, it refers to the global object */

function foo() {
  console.log(this);
}

foo() // will log the global object