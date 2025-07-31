export default class User {

    constructor({email, password}) {
        this.email = email;
        this.password = password;

        if(!this.email.includes('@')) {
            throw new Error('Email need @ sign!')
        }

        if(this.password.length < 8) {
            throw new Error('Password must be at least 8 characters long')
        }
    }

    getEmail() {
        return this.email
    }

    getPassword() {
        return this.password
    }

    login() {
        if(this.email.includes('devmentor.pl')) {
            return true
        } else { 
            return false
        }
    }   
}