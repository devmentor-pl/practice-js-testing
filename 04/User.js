export default class User {
  constructor({ email, password }) {
    this.email = email;
    this.password = password;

    if (!this.email.includes("@")) {
      throw new Error("Błędny adres e-mail");
    }

    if (this.password.length < 8) {
      throw new Error("Hasło jest za krótkie");
    }
  }

  getEmail() {
    return this.email;
  }

  getPassword() {
    return this.password;
  }

  login() {
    if (this.email.includes("devmentor.pl")) {
      return true;
    }
    if (!this.email.includes("devmentor.pl")) {
      return false;
    }
  }
}
