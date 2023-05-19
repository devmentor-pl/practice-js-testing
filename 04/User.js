export default class User {
    constructor ({email, password}) {
        this.email = email,
        this.password = password
        this.checkPassword();
        this.checkMail();
    }

    checkMail () {
        const regMail = new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/) 
        if (!regMail.test(this.email)) {
            throw new Error('Incorrect mail format!');
        }
    }

    checkPassword () {
        const regPassword = new RegExp(/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8}$/);
        if (!regPassword.test(this.password)) {
            throw new Error('Incorrect password data');
        }
    }


    getEmail() {
        return this.email;
    }

    getPassword() {
        return this.password;
    }

    login() {
        if (this.email.includes('devmentor.pl')) {
            return true
        } else {
            return false
        }
    }
}