const mysql = require('mysql'); //mysql 모듈 로드
const conn = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'rlghlek153',
    database: 'adidas'
})
module.exports = conn;