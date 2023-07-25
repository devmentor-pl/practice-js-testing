const PASSWORD_LENGTH = 8;

export default class User {
  constructor(user) {
    const { email, password } = user;
    this.setProp("email", email);
    this.setProp("password", password);
  }

  setProp(propName, value) {
    const isString = typeof value === "string";
    const isEmpty = propName.length === 0;
    if (!isString || isEmpty) throw new Error(`${propName} not valid`);

    if (propName === "email") {
      const isEmail = value.includes("@");
      if (!isEmail) throw new Error("not a valid email");
    }

    if (propName === "password") {
      const isLengthValid = value.length >= PASSWORD_LENGTH;
      if (!isLengthValid)
        throw new Error("password should contain min 8 characters");
    }

    this[propName] = value;
  }

  getEmail() {
    return this.email;
  }

  getPassword() {
    return this.password;
  }
}

const user = new User({ email: "123@123.pl", password: "123333213" });
