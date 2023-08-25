import DB from './DB';

let DBClass;

beforeEach(() => {
	DBClass = new DB();
});
describe('DB insert func', () => {
	it('func insert return correctly insert data', async () => {
		expect.assertions(1);

		const objectTest = {
			say: 'hello',
			id: 10,
		};
		await DBClass.insert(objectTest);

		const rows = await DBClass.getRows();
		const containsObjectTest = rows.some(row => row.id === objectTest.id);

		expect(containsObjectTest).toBe(true);
	});

	it('func insert should throw an error when id is a string', async () => {
		expect.assertions(1);
		const objectTest = {
			say: 'hello',
			id: 'id',
		};

		try {
			await DBClass.insert(objectTest);
		} catch (error) {
			expect(error).toBe('ID can be only number!');
		}
	});

	it('func insert should throw an error when id is duplicated', async () => {
		expect.assertions(1);
		const objectTest = {
			say: 'hello',
			id: 2,
		};

		try {
			await DBClass.insert(objectTest);
		} catch (error) {
			expect(error).toBe("ID can't be duplicated!");
		}
	});
});

describe('DB func select', () => {
	it('func select should return searching id', async () => {
		expect.assertions(1);
		//2 added in DB.js file
		const id = 2;
		const result = await DBClass.select(id);

		expect(result.id).toBe(id);
	});

	it('func select should return reject when id is not finded', async () => {
		expect.assertions(1);
		const id = 3;

		try {
			await DBClass.select(id);
		} catch (error) {
			expect(error).toBe('ID not found');
		}
	});
});

describe('DB func remove', () => {
	it('func remove is working correctly', async () => {
		expect.assertions(1);
		//2 added in DB.js file
		const id = 2;

		//removing object with id = const id
		await DBClass.remove(id);

		// take all data from .rows and setting to const rows
		const rows = await DBClass.getRows();
		//searching in rows if my const id is still available
		const containsObjectTest = rows.some(row => row.id === objectTest.id);
		// expect false (we cannot find id because we removed)
		expect(containsObjectTest).toBe(false);
	});

	it('func remove cant remove because id is not exsist', async () => {
		expect.assertions(1);
		const id = 3;

		try {
			await DBClass.remove(id);
		} catch (error) {
			expect(error).toBe('Item not exist!');
		}
	});
});

describe('DB func update', () => {
	it('func update should return an error when id will be empty', async () => {
		expect.assertions(1);
		const objectTest = {
			say: 'hello',
		};

		//dopiero od tego momentu zaczalem rozumiec syntax JEST'a.. :)
		try {
			await DBClass.update(objectTest);
		} catch (error) {
			expect(error).toBe('ID have to be set!');
		}
	});

	it('func update should return resolve when update ended succesfully', async () => {
		expect.assertions(1);
		const objectTest = {
			say: 'newHello',
			id: 2,
		};

		await DBClass.update(objectTest);

		expect(await DBClass.getRows()).toMatchObject([objectTest]);
	});

	it('func update should return an error when id not matches with exist id', async () => {
		expect.assertions(1);
		const objectTest = {
			say: 'newHello',
			id: 3,
		};

		try {
			await DBClass.update(objectTest);
		} catch (error) {
			expect(error).toBe('ID not found!');
		}
	});
});

describe('DB fun truncate', () => {
	it('func truncate should return clear array', async () => {
		expect.assertions(1);

		await DBClass.truncate();
		const rows = await DBClass.getRows();

		expect(rows.length).toBe(0);
	});
});
