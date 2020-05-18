var mysql = require('../db/mysql')
exports.authUserDetail = function(req){
    return new Promise((resolve,reject)=>{
        try{
            var query = "SELECT * FROM auth Where key_id = ? and secret = ?";
            var params = [req.headers.key_id,req.headers.secret];
            var getUsers = mysql.executeQuery(query,params);
            return resolve(getUsers);
        }catch(e){
            return reject(e);
        }
    })
}