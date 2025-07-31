export default class User {
    constructor({ email, password }) {
        if (!/\S+@\S+\.\S+/.test(email)) {
            throw new Error('Invalid email');
        }
        if (password.length < 6) {
            throw new Error('Password is too short');
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
        return this.email.includes('devmentor.pl');
    }
}