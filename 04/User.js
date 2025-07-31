export default class User {
    constructor({ email, password }) {
        this.validateEmail(email);
        this.validatePass(password);

        this.email = email;
        this.password = password;
    }
    getEmail() {
        return this.email;
    }
    getPassword(){
        return this.password;
    }
    login(){
        if(this.email.includes('devmentor.pl')){
            return true
        }
        else{
            return false
        }
    }
    validateEmail(email){
        if(!email || !email.includes('@')){
            throw new Error('invalid email')
        }
    }
    validatePass(password) {
        if(!password || password.length <6) {
            throw new Error('invalid password')
        }
    }

}


