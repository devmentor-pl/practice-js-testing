export default class User {
    constructor({ email, password }) {
        if (!email.includes('@')) {
            throw new Error('Email is incorrect!')
        }
        if (password.length < 6 && [a - z] / i.test(password)) {
            throw new Error('Password is not strong enough!')
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
        if (this.email.includes('@devmentor.pl')) return true
        return false
    }
}