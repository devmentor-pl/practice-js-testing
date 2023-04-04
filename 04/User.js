export default class User {
	constructor({ email, password }) {
		this.email = email;
		this.password = password;
		this.validateEmail();
		this.validatePassword();
	}

	getEmail() {
		return this.email;
	}

	getPassword() {
		return this.password;
	}

	validateEmail() {
		if (!this.email.includes("@")) {
			throw new Error("This email in incorrect");
		}
	}

	validatePassword() {
		if (this.password.length < 8) {
			throw new Error("This password is too short");
		}
	}
}
