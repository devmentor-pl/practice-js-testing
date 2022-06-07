console.log('script')

// example from PDF
// ----------------
// import DB from './DB.js'
// const db = new DB()
// console.log( db._rows )

// db.insert({a: 1, b: 2})
// .then(() => db.insert({a: 3, b: 4}))
// .then(() => console.log('insert OK'))
// .then(() => db.remove(2))
// .then(() => db.update({id: 1}))
// .then(() => db.getRows())
// .then(rows => console.log(rows));


// insert
// --------------
// import DB from './DB.js'
// const db = new DB()
// console.log( db._rows )

// db.insert({c: 3, id: 1})
// .then(rows => console.log(rows))

// select
// ---------------
// import DB from './DB.js'
// const db = new DB()
// console.log( db._rows )

// db.insert({c: 3, id: 1})
// .then(rows => {
//     console.log(rows)
//     db.select(1).then( data => console.log( data ) )
// })

// update
// ---------------
import DB from './DB.js'
const db = new DB()
console.log( db._rows )

db.insert({c: 3, id: 1})
.then(rows => {
    console.log(rows)
    db.update({d: 4, id: 1}).then( data => console.log( data ) )
})

















