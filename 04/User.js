export default class User {
  constructor({ email, password }) {
    if (!this.validateEmail(email) || !this.validatePassword(password)) {
      throw new Error('Incorrect email or password');
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
    return this.email.includes('devmentor.pl');
  }

  validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  }

  validatePassword(password) {
    return password.length >= 6;
  }
}
