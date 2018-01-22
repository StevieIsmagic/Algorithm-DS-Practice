class User {
	constructor({ email, password }) {
    this.email = email;
    this.password = password;
	}
}

const newUser = new User({
	email: 'asdf@gmail.com',
	password: 'asdf'
})

console.log(newUser);