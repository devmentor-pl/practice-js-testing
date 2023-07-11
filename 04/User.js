export default class User {
    constructor({ email, password }) {
        this.email = this.getEmail(email)
        this.password = this.getPassword(password)
    }

    getEmail(email) {
        if (!email.includes('@')) {
            throw new Error('Email must include "@" sign')
        } else return email
    }

    getPassword(password) {
        if (password.length < 8) {
            throw new Error('Password length must be greater than 8')
        } else return password
    }

    login() {
        if (!this.email.includes('devmentor.pl')) {
            return false
        } else return true
    }
}