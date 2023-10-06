export default class User {
    constructor(file) {
        const {email, password} = file;

        if(!email.include('@')) {
            throw new Error(' email adress is incorrect');
        }

        if(!password.length < 7 ) {
            throw new Error('password is incorrect');
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

    login () {
        return this.email.includes ('devmentor.pl');
    
    }
}


