export default class User {
    constructor({email, password}) {
        this._validateEmail(email);
        this._validatePassword(password);
        this.email = email;
        this.password = password;
    }

    _validateEmail(email) {
        //https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const validatedEmail = re.test(String(email).toLowerCase());

        if (!validatedEmail) {
            throw new Error('The email is incorrect');
        }
    }

    _validatePassword(password) {
        if (password.length < 5) {
            throw new Error('The password should have minimum 6 characters');
        }
    }

    getEmail() {
        return this.email;
    }

    getPassword() {
        return this.password;
    }

    login() {
        return this.email.endsWith('devmentor.pl');
    }

}