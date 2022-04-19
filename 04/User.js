export default class User {
    constructor({email, password}) {
        this.email = this.checkEmail(email);
        this.password = this.checkpPassword(password)
    }
    
    getEmail() {
        return this.email;
    }
    
    getPassword() {
        return this.password;
    }
   
    checkEmail(email) {
        const pattern = /^[a-z0-9]{1}[a-z0-9]*[@]{1}[a-z0-9]*[.]{1}[a-z]*/;

        if( pattern.test(email) ) {
            return email;
        } else {
            throw new Error('incorrect email');
        }
    }

    checkpPassword(password) {
        const pattern = /[a-z0-9]{6}/

        if( pattern.test(password) ) {
            return password;
        } else {
            throw new Error('incorrect password');
        }
    }

    login() {
        if ( this.email.includes('devmentor.pl') ) {
            return true;
        } else {
            return false;
        }
    }
}