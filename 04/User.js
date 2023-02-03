export default class User {
    constructor({email, password}) {
        this.email = email;
        this.password = password;
        this.validateEmail();
        this.validatePassword();
    }

    getEmail() { 
        return this.email; 
    }

    getPassword() { 
        return this.password;
    }

    checkLogin() {
        if(this.email.includes('devmentor.pl')) {
            return true;
        } else {
            return false;
        }
    }

    validateEmail() {
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(!this.email.match(regex)) {
            throw new Error('invalid email')
        }
    }

    validatePassword() {
        if(this.password.length < 8) {
            throw new Error('too short password')
        }
    }
}


// wydaje mi się, że jest okej ale nie przechodzi testów, I don't know why?