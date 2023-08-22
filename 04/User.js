export default class User {
	constructor(dataUser) {
		this.email = dataUser.email;
		this.password = dataUser.password;
	}
	getEmail() {
		return this.email;
	}
	getPassword() {
		return this.password;
	}
}
