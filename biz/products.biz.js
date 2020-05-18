var mysql = require('../db/mysql')
exports.getProdcuts = function(){
    return new Promise((resolve,reject)=>{
        try{
            var query = "SELECT * FROM products where status = ?",
            var params = ['active']
            var getProducts = mysql.executeQuery(query,params);
            return resolve(getProducts);
        }catch(e){
            return reject(e);
        }
    })
}