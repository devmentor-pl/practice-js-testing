export default class User {
  constructor({ email, password }) {
    this.setEmail(email);
    this.setPassword(password);
  }

  setEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new Error("Invalid email format.");
    }
    this.email = email;
  }

  setPassword(password) {
    if (password.length < 6) {
      throw new Error("Password should be at least 6 characters.");
    }
    this.password = password;
  }

  getEmail() {
    return this.email;
  }

  getPassword() {
    return this.password;
  }

  login() {
    return this.email.includes("@devmentor.pl");
  }
}
