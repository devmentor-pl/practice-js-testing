export default class User {
    constructor(userObj) {
        const { email, password } = userObj

        this.email = email
        this.password = password

        if(!email.includes('@')) {
            throw new Error('This is wrong email')
        }

        if(password.length < 8) {
            throw new Error('Password is no long enough')
        }
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