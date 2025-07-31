export default class User {
    constructor( {email, password} ) {

        this.email = email;
        this.password = password;

        if (!this.email.includes('@')) {
            throw new Error ('Email must be correct');
        }

        if (this.password.length < 4) {
            throw new Error ('Password must be longer than three signs');
        }

    }
    
    getEmail() {
        return this.email;
    }

    getPassword() {
        return this.password;
    }

    login() {
        if(this.email.includes('devmentor.pl')) {
            return true;
        }
        else {
            return false;
        }
    }

}