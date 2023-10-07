export default class User {
   constructor({ email, password }) {
     if (!this.isEmailValid(email)) {
          throw new Error('email is incorrect!')
     }
     if (!this.isPassValid(password)) {
          throw new Error ('password must include at least one letter')
     } 
     if (!this.isPassLengthCorrect(password)) {
        throw new Error ('password must be longer or equal to 6')
     }
        this.email = email;
        this.password = password;
   }
   login() {
     if (this.email.includes('devmentor.pl')) {
          return true
     }
     return false
   }

   isPassValid(password) {
     return password.match(/[a-zA-Z]/) && password.length > 3;
   }
   isPassLengthCorrect(password) {
    return password.length >= 6
   }
   isEmailValid(email) {
     return email.includes('@') && email.includes('.');
   }
   getEmail() {
    return this.email;
   }
   getPassword() {
    return this.password;
   }
  
 }