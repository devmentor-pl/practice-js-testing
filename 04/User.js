//DZIAŁA
export default class User { 
    constructor({ email, password }) { 
        if (!this.validateEmail(email)) { 
            throw new Error('Invalid email address'); 
        } 
        if (!this.validatePassword(password)) { 
            throw new Error('Invalid password');  
        } 
        this.email = email; 
        this.password = password; 
    }
    
    getEmail() { 
        return this.email; 
    } 
    
    getPassword() { 
        return this.password; 
    } 
    
    login() { 
        return this.email.includes('@devmentor.pl');
    } 
    
    validateEmail(email) { 
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
        return emailRegex.test(email); 
    } 
    
    validatePassword(password) {
        return password.length >= 6; 
    } 
}