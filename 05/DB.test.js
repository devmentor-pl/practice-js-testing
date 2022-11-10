import DB from './DB';

describe('DB', () => {
    describe('insert', () => {
        it('should add data object to the array', () => {
           async() => {

               const subject = new DB;
               const data = {a: 3, b: 4}
               // when 
                const result = await subject.insert(data)
   
                expect(subject._rows).toContain(result);
           }
        });
        it('should return null if data id is not a number',()  => {
            async() => {

                const subject = new DB;
                const data = {a: 3, b: 4, id: '2'}
                const result = await subject.insert(data)
    
                expect(result).toBeNull();
            }
        });

        it('should return null when data is duplicated', ()  => {
            async() => {
                const subject = new DB;
                const data = {a: 3, b: 4, id: '2'}
                await subject.insert(data)
                const result = await (subject.insert(data));
                expect(result).toBeNull();
            }
        });
    })
})