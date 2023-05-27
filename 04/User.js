export default class User {
    constructor(data){
        const {email, password} = data

        if(!email.includes('@')){
            throw new Error('Email is incorrect')
        }

        if(password.length < 8){
            throw new Error('Password is incorrect')
        }

        this.email = email
        this.password = password
    }

    login() {
        return this.email.includes('devmentor.pl')
    }

    getEmail(){
        return this.email
    }

    getPassword(){
        return this.password
    }
}