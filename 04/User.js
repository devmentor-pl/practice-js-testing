export default class User {
	constructor({ email, password }) {
		this.email = email;
		this.password = password;
		this.validateEmail();
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
}

// it("should throw exception when email is incorrect", () => {
//     function createWrongUserData() {
//         new User({ email: "devmentor.pl", password: "pw123456" });
//     }

//     expect(createWrongUserData).toThrow();
// });
