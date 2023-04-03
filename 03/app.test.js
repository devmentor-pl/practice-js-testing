import randomNumber from './app';

it('return 1 when range is 1 to 1', () => {
	expect(randomNumber(1, 1)).toBe(1);
});

it('throw exception when "min" is not a number', () => {
	function isNumber() {
		randomNumber(undefined, 1);
	}
	expect(isNumber).toThrow();
});
