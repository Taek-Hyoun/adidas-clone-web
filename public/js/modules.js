const db = require('../../db');

function select(id, pw) {
    if (id && pw) {//아이디랑 비번 둘다 값이 들어있으면...
        return new Promise((resolve, reject) => {
            db.query('select * from adidas.user where id = ? and pw = ?', [id, pw], function (err, rs, fd) {
                if (err) throw err;
                
                if (rs.length > 0) {
                    console.log('succeeds');
                    resolve(rs[0]);
                }
            })
        })
    }
}
function selectUserInfo(id) {
    return new Promise((resolve, reject) => {
        db.query('select * from adidas.userInfo ui where ui.id = ?', [id], function (err, rs, fd) {
            if (err){
                throw err;
            }
            
            if (rs) {
                console.log('조회성공');
                resolve(rs[0]);
            }
        })
    })
}
function randomer(){
    return '';
}
function insertOrderInfo(uid, productName, price, count, userName, phone, addr){
    return new Promise((resolve, reject) => {
        db.query(`insert into adidas.order(userid, product, price, count, userName, phone, address, ${ranomer()}) values(?,?,?,?,?,?,?,?)`,
                    [uid, productName, price, count, userName, phone],function(err, rs, fd){
            if (err){
                throw err;
            }
            
            if (rs) {
                console.log('조회성공');
                resolve(rs[0]);
            }
        })
    })
}
module.exports = {
    select,
    selectUserInfo,
    insertOrderInfo
}