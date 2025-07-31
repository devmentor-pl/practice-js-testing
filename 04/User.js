export default class User {
  constructor({ email, password }) {
    if (!this._validateEmail(email)) {
      throw new Error("Incorrect email!");
    }
    if (!this._validatePassword(password)) {
      throw new Error("Incorrect password!");
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

  _validateEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
    return regex.test(email);
  }

  _validatePassword(password) {
    const regex = /^[a-zA-Z]{2}\d{6}$/;
    return regex.test(password);
  }
}
