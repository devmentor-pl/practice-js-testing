export default class User {
  constructor(userData) {
    const {email, password} = userData;
    this.validateEmail(email);
    this.validatePassword(password);

    this.login();
  }
  getEmail() {
    return this.email;
  }
  getPassword() {
    return this.password;
  }
  validateEmail(email) {
    const regExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (regExp.test(email)) {
      return (this.email = email);
    } else throw new Error('Email is incorrect');
  }
  validatePassword(password) {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (passwordRegex.test(password)) {
      return (this.password = password);
    } else throw new Error('incorrect password');
  }
  login() {
    const dataBaseDomains = ['devmentor.pl'];
    const userDomain = this.email.split('@')[1];
    if (dataBaseDomains.includes(userDomain)) {
      return true;
    } else {
      return false;
    }
  }
}
