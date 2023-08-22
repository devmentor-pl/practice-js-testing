import DB from './DB';

describe('DB insert func', () => {
	it('func insert return correctly insert data', async () => {
		const objectTest = {
			say: 'hello',
			id: 2,
		};
		const DBClass = new DB();
		await DBClass.insert(objectTest);
		const rows = await DBClass.getRows();
		expect(rows).toMatchObject([objectTest]);
	});
	it('func insert return false when id is a string', async () => {
		const objectTest = {
			say: 'hello',
			id: 'id'
		};
		const DBClass = new DB();
		const result = await DBClass.insert(objectTest);

		expect(result).toThrow();
	});
});
