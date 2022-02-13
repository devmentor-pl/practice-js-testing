export default class User {
    constructor({email,password}){
        this.email = email;
        this.password = password;
    }

    checkEmail(){
        const regExpEmail = /^[-\w\.]+@([-\w]+\.)+[a-z]+$/i;
        if(!this.email.match(regExpEmail)){
            throw new Error('email is incorrect')
        }
    }
    checkPassword(){
        const regExpPass = /.*?(?:[a-z].*?[0-9]|[0-9].*?[a-z]).*?/
        if(!this.password.match(regExpPass)){
            throw new Error('password should has latters and characters')
        }
    }

    getEmail(){
        return this.email;

    }

    getPassword(){
        return this.password;

    }

    login(){
        const regExpEmailDomain = /^[A-Za-z0-9._%+-]+@devmentor.pl$/;
        if(this.email.match(regExpEmailDomain)){
            return true;
        }
        return false;
    }
}