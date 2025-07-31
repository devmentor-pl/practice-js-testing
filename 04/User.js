export default class User {
    constructor({ email, password}) {
        if(!this.validateEmail(email)) {
            throw new Error('incorrect email');
        }
        if (!this.validatePassword(password)) {
            throw new Error('Incorrect password');
        }

        this.email = email;
        this.password = password;
    }

    getEmail() {
        return this.email;
    }

    getPassword() {
        //metoda pomocnicza w celach testowych
        return this.password;
    }

    login() {
        return this.email.includes('@devmentor.pl');
    }

    validateEmail(email) {
        return email.includes('@');
    }

    validatePassword(password) {
        return password.length >= 6;
    }
}