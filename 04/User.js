export default class User {
  constructor(user) {
    const { email, password } = user;
    this.email = email;
    this.password = password;
  }

  getEmail() {
    return this.email;
  }

  getPassword() {
    return this.password;
  }
}
