export default class User {
	constructor(dataUser) {
		if (this._validationMail(dataUser.email) && this._validationPass(dataUser.password)) {
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
	login() {
		if (this.email.includes('devmentor.pl')) {
			return true;
		} else {
			return false;
		}
	}
	_validationMail(email) {
		const emailRegex = /^[-\w\.]+@([-\w]+\.)+[a-z]+$/i;
		return emailRegex.test(email);
	}
	_validationPass(pass) {
		const passRegex = /^.{6,}$/;
		return passRegex.test(pass);
	}
}
