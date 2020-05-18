var mysql = require('mysql');
var pool  = mysql.createPool({
  connectionLimit : 10,
  host            : '127.0.0.1',
  user            : 'root',
  password        : 'admin123',
  database        : 'OrderManagementSyatem'
});
exports.executeQuery = function(query,params){
    return new Promise((resolve,reject)=>{
        try{
            pool.query(query, params,function (error, results, fields) {
                if (error) {
                    return reject(error);
                }
                return resolve(results);
              });
        }catch(e){
            reject(e);
        }
    })
}
