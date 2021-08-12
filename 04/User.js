export default class User {
    /*constructor({ email, password }) {
        //this.email;
        //this.password;
        this.getEmail(email);
        this.getPassword(password);
    }

    getEmail(email) {
        if (!email.includes("@")) {
            throw new Error("Not an email");
        }
        this.email = email;
    }

    getPassword(password) {
        if (password.length < 5) {
            throw new Error("Password too short");
        }
        this.password = password;
    }

    login() {
        if (this.email.includes("devmentor.pl")) {
            return true;
        } else return false;
    }*/

    constructor(obj) {
        this.email = this.getEmail(obj);
        this.password = this.getPassword(obj);
        //this.email;
        //this.password;
    }

    getEmail(obj) {
        const email = obj.email;
        if (!email.includes("@")) {
            throw new Error("Not an email");
        }
        return email;
    }

    getPassword(obj) {
        const password = obj.password;
        if (password.length < 5) {
            throw new Error("Password too short");
        }
        return password;
    }

    login() {
        if (this.email.includes("devmentor.pl")) {
            return true;
        } else return false;
    }
}
