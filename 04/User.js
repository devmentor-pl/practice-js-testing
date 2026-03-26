export default class User {
  constructor({ email, password }) {
    if (!email.includes('@')) {
      throw new Error('Email validation failed!')
    }

    if (password.length <= 3) {
      throw new Error('Hasło jest zbyt krótkie!')
    }

    if (!/(?=.*[0-9])(?=.*[a-zA-Z])/.test(password)) {
      throw new Error('Hasło musi posiadać litery!')
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
    if (this.email.includes('devmentor.pl')) {
      return true;
    }
    return false;
  }
}