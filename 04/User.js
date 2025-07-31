export default class User {
    constructor({email, password}) {
        this.email = email;
        this.password = password;

        if (!email.includes('@')) {
            throw new Error('Email is incorrect');
        }

        if (password.length < 8) {
            throw new Error('Password is to short');
        }

    }

    getEmail() {
        return this.email;
    }

    getPassword() {
        return this.password;
    }

    login() {
        const reg =  /([a-zA-Z]+)@devmentor.pl*$/        
        if (reg.test(this.email)) return true;
        return false;
    }
}