export default class User {
    constructor({email, password}) {
        this.email = email;
        this.password = password;

        this.validate()
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
        } else {
            return false;
        }
    }

    validate() {
        if(!this.email.includes('@')) {
            throw new Error('Email is incorrect!');
        }

        if(this.password.length <= 3) {
            throw new Error('Password is incorrect!');
        }
    }
}