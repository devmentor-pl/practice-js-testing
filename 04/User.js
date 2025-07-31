export default class User {

    constructor(obj) {

        this.email = obj.email;
        this.password = obj.password
        if (!this.email.includes("@")) {


            throw new Error('email is incorrect')
        }

        if (this.password.length < 6) {


            throw new Error('password is incorrect')
        }

    }

    getEmail() {


        const email = this.email

        if (!email.includes("@")) {


            throw new Error('email is incorrect')
        }


        return email



    }

    getPassword() {
        const password = this.password

        

        return password

    }
    login() {
        const index = this.email.indexOf("@")
        const find = this.email.indexOf("devmentor.pl", index)

        if (find == "-1") {


           
            return false
        }
        return true
    }

}