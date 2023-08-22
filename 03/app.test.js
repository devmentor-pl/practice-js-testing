import randomNumber from './app';

describe('RandomNumber', () => {
	it('return error when func has no argumnets', () => {
		expect(() => randomNumber()).toThrow();
	});
});
