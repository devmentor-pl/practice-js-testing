export default class User {
    constructor(object) {
        this.email = object.email;
        this.password = object.password;
    }
    getEmail() {
        return this.email;
    }
    getPassword() {
        return this.password;
    }
};