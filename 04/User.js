export default class User {
  constructor(user) {
    const { email, password } = user;
    this.setEmail(email);
    this.password = password;
  }

  getEmail() {
    return this.email;
  }

  getPassword() {
    return this.password;
  }

  setEmail(emailInput) {
    const isEmpty = emailInput.length === 0;
    const isEmail = emailInput.includes("@");
    if (isEmpty || !isEmail) throw new Error("email not valid");

    this.email = emailInput;
  }
}
