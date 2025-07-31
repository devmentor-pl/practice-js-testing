export default class User {
  constructor({email, password}) {
    this.email = email;
    this.password = password;
    if(!this.isEmailCorrect() || !this.isPasswordCorrect()) {
      throw new Error("Incorrect email or password.");
    }
  }

  getEmail() {
    return this.email;
  }

  getPassword() {
    return this.password;
  }

  login() {
    const {email} = this;
    const domainRegex = /\b\w+@devmentor\.pl\b/;

    if (domainRegex.test(email)) {
      return true;
    }

    return false;
  }

  isEmailCorrect() {
    const {email} = this;
    const emailRegex = /^\S+@\S+$/g;

    if (emailRegex.test(email)) {
      return true;
    }

    return false;
  }

  isPasswordCorrect() {
    const {password} = this;
    const numberRegex = /\d/g;
    const letterRegex = /[a-zA-Z]/g;
    const characterCountRegex = /.{8,}$/;

    if (numberRegex.test(password) && letterRegex.test(password) && characterCountRegex.test(password)) {
      return true;
    }

    return false;
  }
}