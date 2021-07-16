export default class User {
    
    constructor({email, password}) {
        this.email = email;
        this.password = password;

        if (!this.email.includes('@') || this.email.length < 14) {
            throw new Error('error');
        }

        if (this.password.includes('@') || this.password.length < 8) {
            throw new Error('error');
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
        } else {
            return false;
        }
    }
}
