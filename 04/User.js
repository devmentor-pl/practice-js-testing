const PASSWORD_MIN_LENGHT = 7
export default class User {
    constructor({
        email,
        password
    }) {
        this.email = this._checkEmail(email);
        this.password = this._checkPassword(password);
    }

    getEmail() {
        return this.email;
    }

    getPassword() {
        return this.password;
    }

    login() {
        if (this.email.includes('devmentor.pl')) {
            return true;
        } else return false;
    }

    _checkEmail(email) {
        if (/\S+@\S+\.\S+/.test(email)) {
            return email;
        } else {
            throw new Error('Invalid email address')
        }
    }

    _checkPassword(password) {

        if (password.length > PASSWORD_MIN_LENGHT) {
            if (/^(?=.*[A-Za-z])(?=.*\d)/.test(password)) {
                return password;
            } else {
                throw new Error('Password must contain both letters and numbers')
            }
        } else {
            throw new Error(`Password must be at least ${PASSWORD_MIN_LENGHT} long`)
        }
    }


}