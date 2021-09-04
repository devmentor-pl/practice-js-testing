export default class User {
    constructor(user = {}) {
        this.user = user;
        this._checkData(this.user)


    }

    getEmail() {
        return this.user.email;
    }

    getPassword() {
        return this.user.password
    }

    login() {
        if (this.user.email.includes('devmentor.pl')) {
            return true;
        } else {
            return false;
        }
    }

    _checkData(user) {
        const email = user.email;
        if (!email.includes('@')) {
            throw new Error(
                'Email is incorrect'
            );
        }


        if (email === this.getEmail()) {
            if (user.password !== 'pw123456') {
                throw new Error(
                    'Password is incorrect'
                );
            }
        }
    }
}
