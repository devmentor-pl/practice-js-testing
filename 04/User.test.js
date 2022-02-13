import User from './User';

describe('User', () => {
    it('should had set email and password when create instance', () => {
        const email = 'koder@devmentor.pl';
        const password = 'pw123456';
        const user = new User({email, password});

        expect(user.getEmail()).toBe(email);
        expect(user.getPassword()).toBe(password);
    });

    it('should throw exception when email is incorrect', () => {
        const user = new User({email: 'devmentor.pl', password: 'pw123456'});
        expect(()=>{user.checkEmail()}).toThrow('email is incorrect');
    });

    it('should throw exception when password is incorrect', () => {
        const user = new User({email: 'koder@devmentor.pl', password: '123'});
        expect(()=>{user.checkPassword()}).toThrow('password should has latters and characters');
    });

    describe('.login()', () => {
        it('should return true when email contain domain devmentor.pl', () => {
            const email = 'koder@devmentor.pl';
            const password = 'pw123456';
            const user = new User({email, password});

            expect(user.login()).toBe(true);
        });

        it('should return false when email not contain domain  devmentor.pl', () => {
            const email = 'koder@gmail.com';
            const password = 'pw123456';
            const user = new User({email, password});

            expect(user.login()).toBe(false);
        });
    });
});