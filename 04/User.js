export default class User {
    constructor(object) {
        const {email, password} = object;

        if(!email.includes('@')) {
            throw new Error()
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
}