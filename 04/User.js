export default class User {
    constructor({ email, password }) {

        this.email = email;
        this.password = password;
        if (!email.includes("@") || password.length < 4) {
              throw new Error();
        }
    }

    getEmail() {
        return this.email;
    }

    getPassword() {
        return this.password;
    }


    login() {
        if (this.email.includes('devmentor.pl')) {
            return true;
        }
        else {
            return false;
        }
    }

}