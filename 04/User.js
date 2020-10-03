export default class User {
    constructor(object) {
        this.email = object.email;
        this.password = object.password;
        this.checkIfCorrectMail();
        this.checkIfCorrectPass();
    };

    getEmail() {
        return this.email;
    }
    getPassword() {
        return this.password;
    }
    checkIfCorrectMail() {
        if (!this.email.includes('@')) {
            throw new TypeError('E-mail must contain @')
        };
    }
    checkIfCorrectPass() {
        if (this.password.length <= 6 && this.password.includes(/\d+/)) {
            throw new TypeError('Pass must be longer than 6 letters and contain at least one digit')
        };
    }
    login(){
        if (this.email.includes('devmentor.pl')) {
            return true;
        }
        if (!this.email.includes('devmentor.pl')) {
            return false;
        }
    }
};