export default class User {
    constructor(user) {
        const { email, password } = user;

        if (!email.includes('@')) {
            throw new Error('email is incorrect');
        };
        if (password.length < 8) {
            throw new Error('password is too short');
        };

        this.email = email;
        this.password = password;
    };

    getEmail() {
        return this.email;
    };

    getPassword() {
        return this.password;
    };

    login() {
        return this.email.includes('devmentor.pl');
    };
};