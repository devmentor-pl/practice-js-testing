export default class User {
    constructor(object) {

        ({email: this.email, password: this.password} = object);
        // this.email = object.email;
        // this.password = object.password;
        this.isEmailCorrect();
        this.isPassCorrect();
    };

    getEmail() {
        return this.email;
    }
    getPassword() {
        return this.password;
    }
    isEmailCorrect() {
        if (this.email.includes('@')) {
            return this.email;
        } else {
            throw new TypeError('E-mail must contain @')
        }
    }
    isPassCorrect() {
        const regex = /\d+/
        if (this.password.length >= 6 && this.password.match(regex)) {
            return true;
        }
        else {
            throw new TypeError('Pass must be longer than 6 letters and contain at least one digit')
        };
    }
    login() {
        if (this.email.includes('devmentor.pl')) {
            return true;
        }
        else {
            return false;
        }
    }
};