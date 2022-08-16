export default class User {
    constructor({
        email,
        password
    }) {
        if(!email.includes('@')) {
            throw new Error('Adres mailowy musi posiadać znak "@"');
        }

        if(password.length  < 5) {
            throw new Error('Błędne hasło!')
        }

        this.email = email;
        this.password = password;
    }

    login() {
        if (this.email.includes('devmentor.pl')) {
            return true;
        } else {
            return false
        }
    }

    getEmail() {
        return this.email;
    }

    getPassword() {
        return this.password;
    }
}