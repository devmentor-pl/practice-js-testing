const PASSWORD_LENGTH = 3;

export default class User {
    constructor( {email, password} ) {
        this._validateEmail(email);
        this._validatePassword(password);
        this.email = email;
        this.password = password;
    }

    getEmail() {
        return this.email;
    }

    getPassword() {
        return this.password;
    }
    
    login() {
        const domain = /@devmentor\.pl$/;
        const matched = this.email.match(domain);
        return matched !== null && matched.length === 1;
    }

    _isEmailValid(email) {
        return email.includes("@");
    }

    _validateEmail(email) {
        if(!this._isEmailValid(email)) 
            throw new Error("Incorrect email!");
    }

    _isPasswordValid(password) {
        return password.length > PASSWORD_LENGTH;
    }

    _validatePassword(password) {
        if(!this._isPasswordValid(password))
            throw new Error("Password should be at least 4 characters long");
    }
}