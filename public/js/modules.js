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
    if (id) {//아이디랑 비번 둘다 값이 들어있으면...
        return new Promise((resolve, reject) => {
            db.query('select * from adidas.user where id = ?', [id], function (err, rs, fd) {
                if (err) throw err;
                
                if (rs.length > 0) {
                    console.log('조회성공');
                    resolve(rs[0]);
                }
            })
        })
    }
}
module.exports = {
    select,
    selectUserInfo
}