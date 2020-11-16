export default class User {
  constructor({ email, password }) {
    if (!email.includes('@')) {
      throw new Error('Email address lacks \'@\'.')
    }
    if (this._isCorrectPassword(password)) {
      throw new Error('Password should have at least 7 characters and contain letters')
    }
    this.email = email;
    this.password = password;
  }

  getEmail() {
    return this.email
  }
  getPassword() {
    return this.password
  }
  login() {
    return this.email.includes('devmentor.pl') ? true : false
  }
  _isCorrectPassword(password) {
    return this._hasEnoughChars(password) || !this._hasAtLeastOneLetter(password)
  }

  _hasEnoughChars(string) {
    return string.length <= 7
  }
  _hasAtLeastOneLetter(string) {
    return string.match(/\w/g)
  }
}