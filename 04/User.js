export default class User {
  constructor({ email, password }) {
    if (!email.includes('@')) {
      throw new Error('Email address lacks \'@\'.')
    }
    if (password.length <= 7 || !password.match(/\w/g)) {
      throw new Error('Password should have at least 7 characters')
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
}