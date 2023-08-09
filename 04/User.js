export default class User {
    constructor(object) {
        const {email, password} = object;

        if(!email.includes('@')) {
            throw new Error('email must have "@"')
        }

        if(password.length < 8 ) {
            throw new Error('password is too short')
        }

        this.email = email;
        this.password = password
        
    }

    getEmail() {
        return this.email
    }

    getPassword() {
        return this.password
    }

    login() {
        return this.email.includes('devmentor.pl')
    }
}
