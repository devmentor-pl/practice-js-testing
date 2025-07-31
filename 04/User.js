export default class User {
	constructor({ email, password }) {
		this.email = email;
		this.password = password;
		this.isCorrectEmail();
		this.isCorrectPassword();
	}

	getEmail() {
		return this.email;
	}

	getPassword() {
		return this.password;
	}

	isCorrectEmail() {
		if (!this.email.includes('@')) {
			throw new Error('Email should contain "@"');
		}
	}

	isCorrectPassword() {
		if (this.password.length <= 6) {
			throw new Error('Password to short');
		}
	}

	login() {
		if (this.email.includes('devmentor.pl')) {
			return true;
		} else {
			return false;
		}
	}
}
