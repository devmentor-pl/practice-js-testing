import DB from './DB'

it('test', () => {
    expect(true).toBe(true)
})

it('test method insert', () => {
    const db = new DB()
    const promise = db.insert({ a: 1, b: 2 })
    return promise.then(res => {
        expect(true).toBe(true)
    })
})

it('test method insert if id is not a number', () => {
    const db = new DB()
    const promise = db.insert({ id: 'a' })
    return promise.catch(err => {
        expect(err).toBe('ID can be only number!')
    })
})

it('test method insert check insert data', () => {
    const db = new DB()
    const promise = db.insert({ c: 3 })
    return promise.then(data => {
        const text = JSON.stringify(data)
        expect(text).toBe('{"c":3,"id":1}')
    })
})

it('test method insert if insert id is duplicated', () => {
    const db = new DB()
    const promise = db.insert({ d: 3, id: 1 })
    return promise.catch(err => {
        expect(err).toBe('ID can\'t be duplicated!')
    })
})

it('test method select check if id exist & data ok', () => {
    const db = new DB()
    return db.insert({ e: 3, id: 1 })
        .then(() => {
            db.select(1)
            .then(data => {
                const newData = JSON.stringify(data)
                expect(newData).toBe('{"e":3,"id":1}')
            })
        })
})

it('test method select check if id is not good', () => {
    const db = new DB()
    // return db.insert({ f: 3, id: 1 })
        // .then(() => {
        return db.select(1)
            .then(data => {
                const newData = JSON.stringify(data)
                expect(newData).toBe('xxx')
            })
            .catch(err => {
                expect(err).toBe('ID not found')
            })
        // })

    // return db.insert({ f: 3, id: 1 })
    //     .then(() => {
    //         db.select(1)
    //         .then(data => {
    //             const newData = JSON.stringify(data)
    //             expect(newData).toBe('{"f":3,"id":2}')
    //         })
    //         .catch(err => {
    //             expect(err).toBe('ID not found')
    //         })
    //     })
})

it('test method remove if resolve', () => {
    const db = new DB()
    // // return db.insert({g: 1})
    // //     .then(() => {
    //       return db.remove(1)
    //         .then(data => {
    //             expect(data).toBe('Item was remove!')
    //         })
    //     // })

    return db.insert({g: 11})
        .then(() => {
            db.remove(11)
            .then(data => {
                expect(data).toBe('Item was remove!')
            })
        })
})

it('test method remove if reject', () => {
    const db = new DB()
    return db.insert({g: 12})
        .then(() => {
            db.remove(20)
            .catch(err => {
                expect(err).toBe('Item not exist!')
            })        
        })

    // const db = new DB()
    //         return db.remove(10)
    //         .catch(err => {
    //             expect(err).toBe('Item not exist!')
    //         })
})

it('test method update data - resolve', () => {
    const db = new DB()
        return db.insert({ dd: 3, id: 1 })
            .then(() => {
                db.update({d: 4, id: 1})
                .then(data => {
                    const text = JSON.stringify(data)
                    expect(text).toBe('{"d":4,"id":1}')
                })                
            })

})

it('test method update fail - reject', () => {
    const db = new DB()
            return db.update({d: 4, id: 100})
            // .then(data => {
            //     const text = JSON.stringify(data)
            //     expect(text).toBe('{d: 4, id: 1}')
            // })
            .catch(err => {
                expect(err).toBe('ID not found!')
            })
})












