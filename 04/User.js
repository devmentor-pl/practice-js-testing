export default class User {
    constructor({ email, password }) {
        if (!email.includes('@')) {
            throw new Error('Invalid Email')
        }
        if (password.length < 6 && [a - z] / i.test(password)) {
            throw new Error('Too short password')
        }
        this.email = email
        this.password = password
    }

    getEmail() {
        return this.email
    }

    getPassword() {
        return this.password
    }

    login() {
        if (this.email.includes('@.pl')) return true
        return false
    }
}