export default class User {
    constructor({email, password}) {
        this.email = email
        this.password = password

        this.isEmailCorrect()
        this.isPasswordCorrect()
    }

    getEmail() {
        return this.email
    }

    getPassword() {
        return this.password
    }

    isEmailCorrect() {
        if (!this.email.includes('@')) {
            throw new Error('Email is wrong')
        }
    }

    isPasswordCorrect() {
        if (this.password.length <= 4) {
            throw new Error('Password is wrong')
        }
    }

    login() {
        if (this.email.includes('devmentor.pl')) {
            return true
        }
        return false
    }

}