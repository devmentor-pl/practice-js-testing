export default class User {
    constructor(user) {
        const {email, password} = user

        if(!email.includes('@')) {
            throw new Error('Please give a correct email.')
        }

        if(password.length < 6) {
            throw new Error('Password is incorrect. Please try again!')
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
        return this.email.includes('devmentor.pl')
    }
}