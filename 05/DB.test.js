import DB from './DB'

describe('insert', () => {
	it('checks if data id is a number ', async () => {
		const subject = new DB()
		const insertData = await subject.insert({
			id: 1,
		})
		expect(typeof insertData.id).toBe('number')
	})

	it('throws error when id duplicated', async () => {
		const subject = new DB()

		await subject.insert({
			b: 'b',
			id: 1,
		})
		// await expect(
		// 	subject.insert({
		// 		y: 'y',
		// 		id: 1,
		// 	})
		// ).rejects.toBe("ID can't be duplicated!")

		try {
			await subject.insert({
				y: 'y',
				id: 1,
			})
		} catch (err) {
			expect(err).toBe("ID can't be duplicated!")
		}
	})
	it('check if element has id', async () => {
		const subject = new DB()

		const insertData = await subject.insert({
			b: 'b',
			id: 1,
		})
		expect(insertData.id).toBeDefined()
	})
})

describe('select', () => {
	it('check if id exists', async () => {
		const subject = new DB()
		const id = 9999

		try {
			await subject.select(id)
		} catch (err) {
			expect(err).toEqual('ID not found')
		}
	})

	it('rejects with "ID not found" for null or undefined ID ', async () => {
		const subject = new DB()

		try {
			await subject.select(null)
		} catch (err) {
			expect(err).toBe('ID not found')
		}
	})
})

describe('remove', () => {
	// tutaj nie bardzo wiem jak to zrobic:

	// it(`checks if item doesn't exist`, async () => {
	// 	const subject = new DB([{ a: 'a', id: 1 }])
	// })

	it('check if item successfully removed', async () => {
		const subject = new DB()

		await subject.insert({
			a: 'a',
			id: 1,
		})

		await subject.insert({
			b: 'b',
			id: 2,
		})

		try {
			await subject.remove(2)
		} catch (err) {
			expect(err).toBe('something went wrong')
		}
	})
})

describe('update', () => {
	it('check if update existing row', async () => {
		const subject = new DB()
		await subject.insert({
			b: 'b',
			id: 2,
		})
		await expect(
			subject.update({
				b: 'a',
				id: 2,
			})
		).resolves.toEqual({
			b: 'a',
			id: 2,
		})
	})

	it('Should reject when ID not found', async () => {
		const subject = new DB()
		try {
			await subject.update({ id: 1 })
		} catch (err) {
			expect(err).toBe('ID not found!')
		}
	})
})

describe('truncate', () => {
	it('should be true when truncate', async () => {
		const subject = new DB()

		subject.insert({
			a: 'a',
			id: 1,
		})
		const result = await subject.truncate()

		expect(result).toBe(true)
		expect(subject._rows).toHaveLength(0)
	})
})

describe('getRows', () => {
	it('should resolve with the current rows when called ', async () => {
		const subject = new DB()

		await subject.insert({
			a: 'a',
			id: 1,
		})

		const result = await subject.getRows()

		expect(result.length).toBe(1)
	})
})
