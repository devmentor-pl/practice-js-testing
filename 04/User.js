class User {
    constructor({email, password}) {
        this.email = email
        this.password = password
    }
    getEmail() {
        return this.email
    }
    getPassword() {
        return this.password
    }
}
export default User

// const email = 'koder@devmentor.pl';
// const password = 'pw123456';
// const user1 = new User({email, password})
// console.log( user1.getEmail() )









