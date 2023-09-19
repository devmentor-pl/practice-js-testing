export default class User {
  constructor({ email, password }) {
    this.setEmail(email);
    this.setPassword(password);
  }

  getEmail() {
    return this.email;
  }
  getPassword() {
    return this.password;
  }
  setEmail(email) {
    if (email === '' || !email.includes('@')) {
      throw "The email cannot be empty and it must contain '@' sign.";
    }
    this.email = email;
  }
  setPassword(password) {
    if (password === '' || password.length < 8) {
      throw 'The password length must be greater than 8 characters.';
    }
    this.password = password;
  }
  login() {
    return this.email.includes('devmentor.pl');
  }
}
