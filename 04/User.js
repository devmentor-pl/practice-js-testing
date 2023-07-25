export default class User {
    constructor({email, password}){
        this.email = this.isEmailValid(email);
        this.password = this.isPasswordValid(password);
    }
    
    login(){
        if(this.email.includes('devmentor.pl')){
            return true
        }else{
            return false
        }
    }
    isEmailValid(email){
        const reg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if(reg.test(email)){
            return email
        }else{
            throw new Error('Email is invalid')
        }
    }
    isPasswordValid(password){
        const reg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if(reg.test(password)){
            return password
        }else{
            throw new Error(`Password has to contain minimum eight characters, at least one letter and one number`)
        }
    }
    getEmail(){
         return this.email
    }
    getPassword(){
        return this.password;
    }

}