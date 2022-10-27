export default class User {
    constructor(obj) {
        const { email, password } = obj

        if (!email.includes('@')) {
            throw new Error('Email is not correct')
        }

        if (password !== 'pw123456') {
            throw new Error('Password is not correct')
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
        if (this.email.includes('@devmentor.pl')) {
            return true
        }
        else {
            return false
        }

    }
}