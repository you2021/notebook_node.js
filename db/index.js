const mysql2 = require('mysql2/promise')

let pool = mysql2.createPool({
    host : "localhost",
    user : "root",
    password : "123456789",
    database : "notebook",
    connectionLimit : 1
})

global.pool = pool