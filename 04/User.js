export default class User {
  constructor({ email, password }) {
    if (!email.includes("@") || password.length < 4) {
      throw new Error();
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
}
