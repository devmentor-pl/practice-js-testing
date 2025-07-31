export default class DB {
  constructor() {
    this._rows = [];
  }

  insert(data) {
    return new Promise((resolve, reject) => {
      if (data.id) {
        if (typeof data.id !== "number") {
          return this.async(reject, "ID can be only number!");
        } else if (this._rows.some((item) => item.id === data.id)) {
          return this.async(reject, "ID can't be duplicated!");
        }
      }

      this.async(() => {
        if (!data.id) {
          data.id = this._rows.reduce((acc, item) => {
            return acc <= item.id ? item.id + 1 : acc;
          }, 1);
        }

        this._rows.push(data);
        resolve(data);
      });
    });
  }

  select(id) {
    return new Promise((resolve, reject) => {
      this.async(() => {
        const [row = null] = this._rows.filter((item) => item.id === id);
        if (row) {
          resolve(row);
        } else {
          reject("ID not found");
        }
      });
    });
  }

  remove(id) {
    return new Promise((resolve, reject) => {
      this.async(() => {
        const lengthBeforeFilter = this._rows.length;
        this._rows = this._rows.filter((item) => item.id !== id);
        const lengthAfterFilter = this._rows.length;

        if (lengthBeforeFilter === lengthAfterFilter) {
          return reject("Item does not exist!");
        } else {
          return resolve("Item was removed!");
        }
      });
    });
  }

  update(data) {
    return new Promise((resolve, reject) => {
      if (!data.id) {
        return this.async(reject, "ID has to be set!");
      } else {
        this.async(() => {
          let updated = null;
          this._rows = this._rows.map((item) => {
            if (item.id === data.id) {
              updated = data;
              return updated;
            }

            return item;
          });

          if (updated) {
            resolve(updated);
          } else {
            reject("ID not found!");
          }
        });
      }
    });
  }

  truncate() {
    return new Promise((resolve) => {
      this.async(() => {
        this._rows = [];
        resolve(true);
      });
    });
  }

  getRows() {
    return new Promise((resolve) => {
      this.async(() => {
        resolve(this._rows);
      });
    });
  }

  async(callback, ...params) {
    setTimeout(() => {
      callback(...params);
    }, Math.random() * 100);
  }
}
