import randomNumber from './app';

describe('randomNumber', () => {
	it('should throw exception if min value is not a number', () => {
		function getRandomNumber() {
			randomNumber('a');
		}
		expect(getRandomNumber).toThrow('Given number must be a number!');
	});
	it('should throw exception if max value is not a number', () => {
		function getRandomNumber() {
			randomNumber(undefined, 'a');
		}
		expect(getRandomNumber).toThrow('Given number must be a number!');
	});
});
