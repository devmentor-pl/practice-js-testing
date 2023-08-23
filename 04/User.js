export default class User {
	constructor(dataUser) {
		if (this._validationMail(dataUser.email) && this._validationPass(dataUser.password)) {
			this.email = dataUser.email;
			this.password = dataUser.password;
		}
	}
	getEmail() {
		return this.email;
	}
	getPassword() {
		return this.password;
	}
	login() {
		if (this.email.includes('devmentor.pl')) {
			return true;
		} else {
			return false;
		}
	}
	_validationMail(email) {
		const emailRegex = /^[-\w\.]+@([-\w]+\.)+[a-z]+$/i;
		if (emailRegex.test(email)) {
			return true;
		} else {
			throw new Error('invalid email');
		}
	}
	_validationPass(pass) {
		const passRegex = /^.{6,}$/;
		if (passRegex.test(pass)) {
			return true;
		} else {
			throw new Error('invalid password');
		}
	}
}
