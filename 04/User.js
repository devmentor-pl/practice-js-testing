export default class User {
	constructor({ email, password }) {
		    this.checkEmailValidation("email", email),
			this.checkPasswordValidation("password", password);
	}
	getEmail() {
		return this.email;
	}
	getPassword() {
		return this.password;
	}
	checkEmailValidation(propName, value) {
		const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailReg.test(value)) {
			throw new Error("Wrong email adress.");
		}
		this[propName] = value;
	}
	checkPasswordValidation(propName, value) {
		if (value.length < 8) {
			throw new Error("Password must contain at least 8 characters.");
		}
		this[propName] = value;
	}
	login() {
		if (!this.getEmail().includes("devmentor.pl")) {
			return false;
		}
		return true;
	}
}
