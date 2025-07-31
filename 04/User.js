export default class User {
    constructor({email,password}) {
        this.email = email;
        this.password = password;
        this.isEmailCorrect();
        this.isPasswordCorrect();
        this.login();
    };
    getEmail() {
        return this.email;
    };
    getPassword() {
        return this.password;
    };
    isEmailCorrect() {
        if (!this.email.includes('@')) throw new Error('incorrect email');
    };
    isPasswordCorrect() {
        if (this.password.length < 8) throw new Error('incorrect password should contains min. 8 characters');
    };
    login() {
        let isLogin = false;
        if (this.email.includes('devmentor.pl')) {
            isLogin = true;
        };
        return isLogin;
    };
};