export default class User {
    constructor({email, password}) {
        this.email = email
        this.password = password

        this.checkEmail()
        this.checkPassword()
    }

    getEmail() {
        return this.email
    }

    getPassword() {
        return this.password
    }

    checkEmail() {
        if(!(this.email.includes('@'))) {
            throw new Error('incorrect email')
        }
    }

    checkPassword() {
        const pattern = /[a-z]/i

        if(!this.password.match(pattern)) {
            throw new Error('password should consist of at least one letter')
        }
    }

    login() {
        const pattern = /@devmentor.pl/i

        if(this.email.match(pattern)) {
            return true
        }
        return false
    }
}