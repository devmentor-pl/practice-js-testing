export default class User {
    constructor({email, password}) {

        if(!email.includes('@')) {
            throw new Error('Email is not correct!');
        } 
        
        if(password.length <= 3) {
            throw new Error('Password is short');
        }

        this.email = email;
        this.password = password;
    }

    getEmail() {
        return this.email;
    }

    getPassword() {
        return this.password;
    }

    login() {
        const domain = "devmentor.pl";
        if(this.email.includes(domain)) {
            return true;
        }
        return false;
    }
}