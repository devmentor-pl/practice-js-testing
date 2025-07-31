export default class User {
    constructor({ email, password }) {


        this.email = email;
        this.password = password;


        if (!this.email.includes('@')) {
            throw new Error('Invalid Email')
        }

        if (this.password.length < 5) {
            throw new Error('The password must contain min. 5 characters')
        }
    }


    login() {
        if (this.email.includes("devmentor.pl")) {
            return true;
        } else {
            return false;
        }
    }

}
