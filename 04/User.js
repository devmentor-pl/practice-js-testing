export default class User {
  constructor({ email, password }) {
    this.email = email;
    this.password = password;
    this.validateEmail(this.email);
    this.validatePassword(this.password);
    this.login();
  }

  getEmail() {
    return this.email;
  }

  getPassword() {
    return this.password;
  }

  validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);
    if (!isValid) {
      throw new Error("E-mail niepoprawny");
    }
  }

  validatePassword(password) {
    if (password !== "pw123456") {
      throw new Error("Hasło niepoprawne");
    }
  }

  validateDomain(email) {
    const allowed = ["devmentor.pl"];
    const domain = email.split("@")[1];
    const isValid = allowed.includes(domain);
    if (isValid) {
      return true;
    }
  }

  login() {
    if (this.validateDomain(this.email)) {
      return true;
    }
    return false;
  }
}
