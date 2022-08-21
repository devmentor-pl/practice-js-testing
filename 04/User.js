export default class User {
	constructor(obj) {
		const { email, password } = obj;
		if (!email.includes("@")) {
			throw new Error("email is incorrect");
		}

		if (password.length < 8) {
			throw new Error("password is incorrect");
		}

		this.email = email;
		this.password = password;
	}

	getEmail() {
		return this.email;
	}

	getPassword() {
		return this.password;
	}

	login() {
		return this.email.includes("devmentor.pl");
	}
}
