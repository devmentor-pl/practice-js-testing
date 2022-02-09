export default class User {
    constructor({email,password}){
        this.email = email;
        this.password = password;
    }

    getEmail(){
        if(this.email){
            return this.email;
        }
    }

    getPassword(){
        if(this.password){
            return this.password;
        }
    }
}