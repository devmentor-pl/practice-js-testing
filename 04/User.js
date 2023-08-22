export default class User {
	constructor(dataUser) {
		if (this._validation(dataUser.email)) {
			this.email = dataUser.email;
			this.password = dataUser.password;
		} else {
			throw new Error('email nieprawidlowy');
		}
	}
	getEmail() {
		return this.email;
	}
	getPassword() {
		return this.password;
	}
	_validation(email) {
		const EmailRegex = /^[-\w\.]+@([-\w]+\.)+[a-z]+$/i;
		return EmailRegex.test(email);
	}
}
