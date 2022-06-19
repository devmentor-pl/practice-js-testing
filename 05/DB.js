export default class DB {
    constructor() {
        this._rows = [];
    }

    insert(data) {
        if (typeof data === 'undefined') {
            throw new Error('this method should contains one argument')
        };
        return new Promise((resolve, reject) => {
            if(data.id) {
                if(typeof data.id !== 'number') {
                    this.async(reject,'ID can be only number!');
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
                resolve(data)
            })
        });
    }

    select(id) {
        if (typeof id === 'undefined') {
            return Promise.reject('Id has to be a number');
        };
        if (typeof id !== 'number') {
            return Promise.reject('Id has to be a number');
        };
        return new Promise((resolve, reject) => {
            this.async(() => {
                const [row = null] = this._rows.filter(item => item.id === id);
                if(row) {
                   return resolve(row);
                } else {
                   return reject('ID not found');
                }
            });
        });
    }

    remove(id) {
        if (typeof id === 'undefined') {
            return Promise.reject('this method should contains one argument');
        };
        if (typeof id !== 'number') {
            return Promise.reject('Id has to be a number');
        };
        return new Promise((resolve, reject) => {
            this.async(() => {
                const lengthBeforeFilter = this._rows.length;
                this._rows = this._rows.filter(item => item.id !== id);
                const lengthAfterFilter = this._rows.length;

                if(lengthBeforeFilter === lengthAfterFilter) {
                   return reject('Item not exist!');
                } else {
                   return resolve('Item was remove!');
                }
            });
        });
    }

    update(data) {
        if (typeof data === 'undefined') {
            throw new Error('this method should contains one argument')
        };
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
                       return resolve(updated);
                    } else {
                       return reject('ID not found!');
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
        }, Math.random() * 100);
    }
}