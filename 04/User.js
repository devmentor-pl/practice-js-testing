// User.js
export default class User {
    constructor({ email = '', password = '' }) {
        if (!this.isValidEmail(email)) {
            throw new Error('Invalid email address');
        }
        if (!this.isValidPassword(password)) {
            throw new Error('Invalid password');
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

    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    isValidPassword(password) {
        return password.length > 3;
    }

    login() {
        if(this.email.includes('devmentor.pl')) {
            return true;
        } else {
            return false;
        }
    }
}
