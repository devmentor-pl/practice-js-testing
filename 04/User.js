export default class User {

    constructor(object) {

        const { email, password } = object

        if(!email.includes('@')){
            
            throw new Error('email must contain "@"')

        }


        if(password.length < 6){
            
            throw new Error('password must be at least 6 characters long')

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

    login(){
        return this.email.includes('devmentor.pl')
    }



}
