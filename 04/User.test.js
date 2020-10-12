import User from './User';

describe('User', () => {

    it('should had set email and password when create instance', () => {
        const email = 'koder@devmentor.pl';
        const password = 'pw123456';
        const user = new User({
            email,
            password
        });

        expect(user.getEmail()).toBe(email);
        expect(user.getPassword()).toBe(password);
    });



    it('should throw exception when email is incorrect', () => {
        function createWrongUserData() {
            const email = 'edevmentor.pl';
            const password = '123ACmsa';
            const user2 = new User({
                email, password
            });
            user2.isEmailCorrect();
        }

        expect(createWrongUserData).toThrow();
    });

    it('should throw exception when password is incorrect', () => {
        function createWrongUserData() {
            const user1 = new User({
                email: 'koder@devmentor.pl',
                password: '123'
            });
            user1.isPassCorrect();
        }

        expect(createWrongUserData).toThrow();
    });

    describe('.login()', () => {
        it('should return true when email contain domain devmentor.pl', () => {
            const email = 'koder@devmentor.pl';
            const password = 'pw123456';
            const user = new User({
                email,
                password
            });

            expect(user.login()).toBe(true);
        });

        it('should return false when email not contain domain devmentor.pl', () => {
            const email = 'koder@gmail.com';
            const password = 'pw123456';
            const user = new User({
                email,
                password
            });

            expect(user.login()).toBe(false);
        });
    });
});