import randomNumber from './app';

it('return 1 when range is 1 to 1', () => {
	expect(randomNumber(1, 1)).toBe(1);
});

it('throw exception when "min" is not a number', () => {
	function isNumber() {
		randomNumber(undefined, 1);
	}
	expect(isNumber).toThrow('min value is not a number');
});

it('throw exception when "max" is not a number', () => {
	function isNumber() {
		randomNumber(1, undefined);
	}
	expect(isNumber).toThrow('max value is not a number');
});

it('throw exception when range is not correct', () => {
	function isCorrectRange() {
		randomNumber(4, 3);
	}
	expect(isCorrectRange).toThrow('max value must be greater than min value');
});
