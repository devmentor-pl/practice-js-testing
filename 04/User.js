// jak ostatnie dwa punkty testu mają być spełnione skoro funkcja login zwróci mi jedynie true lub false? :(  Nie jestem w stanie spełnić jednocześnie dwóch warunków



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