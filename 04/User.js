export default class User {

    constructor({email, password}){

        if(!email.includes('@')){
            throw new Error ('Invalid email format');
        }

        if(password.length < 6 ){
            throw new Error ('Password must be at least 6 characters long');
        }

        this.email = email;
        this.password = password;
    }

    getEmail(){
        return this.email;
    }

    getPassword(){
        return this.password;
    }

    login(){
        return this.email.includes('devmentor.pl');
    }

}