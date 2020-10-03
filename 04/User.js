export default class User {
    constructor(object) {

            this.checkIfCorrectMail();

            this.email = object.email;
            this.password = object.password;


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
    
};
