export default class User {
  constructor({ email, password }) {
    if (!this._isEmailValid(email)) {
      throw new TypeError("Wrong email argument.");
    }

    if (!this._isPasswordValid(password)) {
      throw new TypeError("Password must be at least 8 characters length.");
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

  _isEmailValid(email) {
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailRe.test(email);
  }

  _isPasswordValid(password) {
    const minPasswordLength = 8;

    return password.trim().length >= minPasswordLength;
  }
}
