export default class User {
	constructor({ email, password }) {
		this.email = this.setEmail(email);
		this.password = this.setPassword(password);
	}

	getEmail() {
		return this.email;
	}

	getPassword() {
		return this.password;
	}

	setEmail(email) {
		const emailPattern = '[0-9a-z_.-]+@[0-9a-z.-]+.[a-z]{2,3}';
		const reg = new RegExp(emailPattern);
		if (!reg.test(email)) {
			throw new Error('Email address is not correct');
		} else {
			return email;
		}
	}

	setPassword(password) {
		const passwordPattern = '[A-Z][a-z][0-9]';
		const reg = new RegExp(passwordPattern);
		if (!reg.test(password) && password.length < 8) {
			throw new Error('Password is not correct');
		} else {
			return password;
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
