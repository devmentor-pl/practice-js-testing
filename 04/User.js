export default class User {
  constructor(userData) {
    const {email, password} = userData;
    this.email = email;
    this.password = password;
    this.getEmail();
    this.getPassword();
    this.login();
  }
  getEmail() {
    const isCorrectEmail = this.validateEmail();

    if (isCorrectEmail) {
      return this.email;
    } else {
      throw new Error('Niepoprawny email');
    }
  }
  getPassword() {
    const isPasswordCorrect = this.validatePassword();
    if (isPasswordCorrect) {
      return this.password;
    } else {
      throw new Error(
        'Niepoprawne haslo. Haslo musi zawierać 8 znaków w tym liczby i litery'
      );
    }
  }
  validateEmail() {
    const regExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regExp.test(this.email);
  }
  validatePassword() {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordRegex.test(this.password);
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
