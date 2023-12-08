export default class User {
    constructor({email, password}) {
        this._setEmail(email);
        this._setPassword(password);
    }

    getEmail() {
        return this.email;
    }

    getPassword() {
        return this.password;
    }

    login() {
        return this.email.includes('devmentor.pl');
    }

    _setEmail(emailValue) {
        if(!this._isDataValid('email', emailValue)) {
            throw new Error('Wrong e-mail address!');
        }
        this.email = emailValue;
    }

    _setPassword(passwordValue) {
        if(!this._isDataValid('password', passwordValue)) {
            throw new Error('Wrong password!');
        }
        this.password = passwordValue;
    }

    _isDataValid(propName, value) {
        if (propName === 'email') {
            return /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(value);
        } else if (propName === 'password') {
            return value.length > 6;
        }
    }
}