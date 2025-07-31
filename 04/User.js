export default class User {

    constructor({ email, password }) {
        this.email = email
        this.password = password
        if (!email.includes('@')) {
            throw new Error('Email should contain @!')
        }
        if (password.length < 6) {
            throw new Error('Password is too short!')
        }
    }

    getEmail() {
        return this.email
    }

    getPassword() {
        return this.password
    }

    login(){
        if(this.email.includes('devmentor.pl')){
            return true
        } else {
            return false
        }
    }
}