export default class User {
  constructor({ email, password }) {
    this.email = email;
    this.password = password;
    this.getEmail();
    this.getPassword();
  }

  getEmail() {
    if (!this.email.includes("@")) {
      throw new Error("email is incorrect");
    }
    return this.email;
  }

  getPassword() {
    if (this.password.length < 8) {
      throw new Error("password is incorrect");
    }
    return this.password;
  }

  login() {
    if (this.email.includes("devmentor.pl")) {
      return true;
    } else {
      return false;
    }
  }
}
