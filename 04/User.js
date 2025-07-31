export default class User {
  constructor(data) {
    const { email, password } = data;

    if (!email.includes("@")) {
      throw new Error("The email is incorect");
    }

    if (password.length < 4) {
      throw new Error("The password is to short");
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
