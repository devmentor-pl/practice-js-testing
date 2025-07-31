export default class User {
	constructor({ email, password }) {
		this.email = email
		this.password = password
		this._checkEmail(email)
		this._checkPassword(password)
	}

	getEmail() {
		return this.email
	}

	getPassword() {
		return this.password
	}

	_checkEmail() {
		const regEmail = /^[\w-\.]+@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/

		if (!regEmail.test(this.email)) {
			throw new Error('Invalid email address')
		}
	}

	_checkPassword() {
		const regPass = /^(?=.*[0-9])(?=.*[a-z]).+$/
		if (!regPass.test(this.password)) {
			throw new Error('Invalid password')
		}
	}

	login() {
		if (this.email.includes('devmentor.pl')) {
			return true
		} else {
			return false
		}
	}
}
