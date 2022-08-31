export default class User {
    constructor({email, password}) {
        this.email = email,
        this.password = password

        if(!this.email.includes('@')){
            throw new Error('Email is wrong')
        }

        if(this.password.length < 8 && password.includes(/\d/) == -1 && password.includes(/[a-zA-Z]/) == -1){
            throw new Error('Password is wrong')
        }
    }

    getEmail() {
        return this.email
    }

    getPassword() {
        return this.password
    }

    login() {
        if(this.email.includes('devmentor.pl')) {
            return true
        } else { 
            return false
        }
    }   
}