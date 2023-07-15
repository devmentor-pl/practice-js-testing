export default class User {
    constructor({ email, password }) {
        this.email = this.setEmail(email)
        this.password = this.setPassword(password)
    }

    setEmail(email) {
        if (!email.includes('@')) {
           throw new Error('Email must include "@" sign')
        } else return email
    }

    setPassword(password) {
        if (password.length < 8) { 
            throw new Error('Password length must be greater than 8')
        } else return password
    }

    getEmail() {
        return this.email
    } 

    getPassword() {
        return this.password
    }

    login() {
        if (!this.email.includes('devmentor.pl')) {
            return false
        } else return true
    }
}