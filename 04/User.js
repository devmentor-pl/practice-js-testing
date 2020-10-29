export default class User {

    constructor(user) {

        this.email = user.email;
        this.password = user.password;
        this.checkCorrectEmail()
        this.chectCorrectPassword()
}

getEmail() {
    return this.email;
}
getPassword() {
    return this.password;
}



checkCorrectEmail() {
   if(!this.email.includes('@')) {
    throw new TypeError ('email is not valid')
} else if(this.email.includes('devmentor')) {
    return true;
}
}

chectCorrectPassword() {
    if(!this.password.includes('pw') && this.password.length === 8) {
    throw new TypeError ('password is not correct')
    } 
}



login() {
    if(this.login.includes('devmentor.pl')) {
        return true;
    } else if (!this.login.includes('devmentor.pl'))
    return false;
  }

}

