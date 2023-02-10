import randomNumber from './app';

describe('randomNumber', () => {
	it('should throw exception if min value is not a number', () => {
		function getRandomNumber() {
			randomNumber('a', 2);
		}
		expect(getRandomNumber).toThrow('Given number must be a number!');
	});

	it('should throw exception if max value is not a number', () => {
		function getRandomNumber() {
			randomNumber(2, 'a');
		}
		expect(getRandomNumber).toThrow('Given number must be a number!');
	});

	it('should return 1 if drawing number from the range <1,1>', () => {
		const number = randomNumber(1, 1);
		expect(number).toBe(1);
	});

	it('should pass if drawing number is from given range ', () => {
		const number = randomNumber(10, 43);

		expect(number).toBeGreaterThanOrEqual(10);
		expect(number).toBeLessThanOrEqual(43);
	});

	it('should throw exception if min value is greater than max value', () => {
		function getRandomNumber() {
			randomNumber(5, 2);
		}
		expect(getRandomNumber).toThrow(
			'Min value cannot be greater than max value!'
		);
	});
});
