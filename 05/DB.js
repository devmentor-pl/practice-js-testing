export default class DB {
    constructor() {
        this._rows = [];
    }

    insert(data) {
        return new Promise((resolve, reject) => {
            if (!data) {
                reject('data is not defined!')
                return null
            }
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
                    if(!data.id) {// nie mam data.id wiec zostaje dodane
                        data.id = this._rows.reduce((acc, item) => {// pierwsze wywowalnie;
                            return acc <= item.id ? item.id + 1 : acc; //acc dostaje 1 
                        }, 1); // za pierwszym data.id=1
                    }

                    this._rows.push(data);
                    resolve(data)
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

    remove(id) {//wpuszczam id ktore ma 2
        return new Promise((resolve, reject) => {
            this.async(() => {
                const lengthBeforeFilter = this._rows.length;//dlugosc tej tablicy [2,3] czyli dwa
                this._rows = this._rows.filter(item => item.id !== id);// tablica przechodzi przez filtr, jej el;ement ma byc rozny od przekazanego id
                const lengthAfterFilter = this._rows.length;// this rows po przejsciu i jej dlugosc
                
                if(lengthBeforeFilter === lengthAfterFilter) { // jesli dlugosc jest taka sama zonacza ze podany item jest rozny i itemy przeszly filtr, 
                    reject('Item not exist!');
                } else {    // jesli item jest taki sam zostaje wywalony z tablicy
                    resolve('Item was remove!');
                }
            });
        });
    }

    update(data) { // wpuszczam obiet {id: 2}
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
        }, Math.random() * 100);
    }
}