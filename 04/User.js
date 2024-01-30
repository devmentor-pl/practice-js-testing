export default class User {
    constructor(obj) {
        const { email, password } = obj;

        if (!email.includes("@")) {
            throw new Error(" email is incorrect");
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
}
