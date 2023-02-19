export default class User {
    constructor(userData) {
        this.userData = userData;
    }

    getEmail() {
        const { email } = this.userData;

        return email;
    }

    getPassword() {
        const { password } = this.userData;

        return password;
    }
}