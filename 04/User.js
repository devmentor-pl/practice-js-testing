export default class User {
    constructor({email, password}) {
        if (!email.includes('@')) {
            throw new Error('error')
        }
        if (password.length < 8) {
            throw new Error('error')
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
    login () {
        if(this.email.includes('devmentor.pl')) {
            return true
        }
        else {
            return false
        }
    }
}