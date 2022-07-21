export default 
class DB {
    constructor() {
        this._rows = [];
    }

    insert(data) {
        return new Promise((resolve, reject) => {
            if(data.id) {
                if((typeof data.id) !== 'number') {
                    this.async(reject,'ID can be only number!');
                    //this.async(reject(new Error('ID can be only number!')));
                    return null; // stop function
                } else if(this._rows.some(item => item.id === data.id)) {
                    this.async(reject, 'ID can\'t be duplicated!');
                    return null; // stop function
                }
            }

            this.async(() => {
                if(!data.id) {
                    data.id = this._rows.reduce((acc, item) => {
                        return acc <= item.id ? item.id + 1 : acc;
                    }, 1);
                }

                this._rows.push(data);
                resolve(data);
                //resolve(this._rows.push(data));
            }); 
        });
    }

    select(id) {
        return new Promise((resolve, reject) => {
            this.async(() => {
                const [row = null] = this._rows.filter(item => item.id === id);
                if(row) {
                    resolve(row);
                } else {
                    reject('ID not found');
                }
            });
        });
    }

    remove(id) {
        return new Promise((resolve, reject) => {
            this.async(() => {
                const lengthBeforeFilter = this._rows.length;
                this._rows = this._rows.filter(item => item.id !== id);
                const lengthAfterFilter = this._rows.length;
                
                if(lengthBeforeFilter === lengthAfterFilter) {
                    reject('Item not exist!');
                } else {
                    resolve('Item was remove!');
                }
            });
        });
    }

    update(data) {
        return new Promise((resolve, reject) => {
            if(!data.id) {
                this.async(reject, 'ID have to be set!');
            } else {
                this.async(() => {
                    let updated = null;
                    this._rows = this._rows.map(item => {
                        if(item.id === data.id) {
                            updated = data
                            return updated;
                        }
            
                        return item;
                    });

                    if(updated) {
                        resolve(updated);
                    } else {
                        reject('ID not found!');   
                    }
                });
            }
        });
    }

    truncate() {
        return new Promise(resolve => {
            this.async(() => {
                this._rows = [];
                resolve(true);
            });
            
        })
    }

    getRows() {
        return new Promise(resolve => {
            this.async(() => {
                resolve(this._rows);
            });
        })
    }

    async(callback, ...params) {
        setTimeout(() => {
            callback(...params);
        }, Math.random() * 1000);
    }
}

/*const db = new DB();
db.insert({a: 1, b: 2})
    .then(() => db.insert({a: 3, b: 4}))
    .then(res => console.log(res))
    .then(() => db.select(2))
    .then(res => console.log(res))
    .then(() => db.truncate())
    .then(res => console.log(res))
    .then(() => db.getRows())
    .then(rows => console.log(rows.length));
    //.then(result => {
        //console.log(result);
    //})
    //console.log(db._rows);


       

    class newArray {
        constructor() {
            this.array = [];
        }
        add(item) {
            this.array.push(item);
        }
    }

    const nArray = new newArray();
    nArray.add({Kasia: 1});
    nArray.add({Ola: 2});
    nArray.add({Iza: 3});
    console.log(nArray.array);
    console.log(nArray.array[0].Kasia);

    //console.log(nArray.array[0]);*/