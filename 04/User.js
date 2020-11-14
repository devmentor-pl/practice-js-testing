export default class User {

    constructor(user) {

        this.email = user.email;
        this.password = user.password;
        this.checkCorrectEmail()
        this.checkCorrectPassword()
 };


 getEmail() {
    return this.email;
 }
 getPassword() {
    return this.password;
  } 



 checkCorrectEmail() {
   if(!this.email.includes('@')) {
    throw new TypeError ('email is not valid')
 } else   {
    return true;
  }
}
  



 checkCorrectPassword() {
    if (this.password.length <= 6  && this.password.includes((/\d+/))) {
        throw new TypeError('password must be at least 6 characters long')
    };
}

  login() {
    if(this.email.includes('devmentor.pl')) {
        return true;
    }  else {
        return false;
    }

  }


}

