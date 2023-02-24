export default class User {
    constructor({
        email,
        password
    }) {

        if (email != "koder@devmentor.pl") {
            throw new Error('Invalid email address');
        }
        if (password != 'pw123456') {
            throw new Error('Invalid password');
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
    login() {
        if (this.email.includes('devmentor.pl')) {
            return true;
        } else return false;
    }


}