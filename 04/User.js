export default class User {
    constructor({email, password}) {
        this.email = email;
        if(!this.email.includes('@')){
            throw new Error('Email should include @');
        }
        this.password = password;
        if(this.password.length < 8){
            throw new Error('Password should contain 8 or more characters');
        }
    }
    getEmail(){
            return this.email;
    }

    getPassword(){
            return this.password;
    }

    login() {
        if (this.email.includes('devmentor.pl')) {
            return true;
        }
        else {
            return false;
        }
    }
}