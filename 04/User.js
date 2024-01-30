export default class User {
    constructor(obj) {
        const { email, password } = obj;
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
