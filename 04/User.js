export default class User {
    constructor(userData) {
        this.userData = userData;
        this.email = userData.email;
        this.password = userData.password;
        this.validate();
    }

    getEmail() {
        return this.email;
    }

    getPassword() {
        return this.password;
    }

    validate() {
        if (!this.email.includes('@')) {
            throw new Error('Wrong email!');
        }
        if (this.password.length < 4) {
            throw new Error('Wrong password!');
        }
    }
}