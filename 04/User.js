export default class User {
    constructor( {email, password} ) {

        this.email = email;
        this.password = password;

        this.validateLogin(email);
        this.validatePassword(password);
    }


    getEmail() {
        return this.email;
    }

    getPassword() {
        return this.password;
    }

    login() {
        return this.email.includes("devmentor.pl");
      }

    validateLogin(email) {
        if( !email.includes('@') ) {
            throw new Error('email must contains @');
        }
      }

    validatePassword(password) {
        if( password.length < 8 ) {
            throw new Error('password length must have 8 sign')
        }
    }
}