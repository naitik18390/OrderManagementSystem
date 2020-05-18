var mysql = require('../db/mysql')
exports.getOrders = function(){
    return new Promise((resolve,reject)=>{
        try{
            var query = "SELECT * FROM orders where status = ?";
            var params = ['pending'];
            var getOrders = mysql.executeQuery(query,params);
            return resolve(getOrders);
        }catch(e){
            return reject(e);
        }
    })
}

exports.setOrders = function(req){
    return new Promise((resolve,reject)=>{
        try{
            var query = "INSERT INTO orders (user_id,product_id,quantity,price,status) values(?,?,?,?,?)";
            var params = [req.body.user_id,req.body.product_id,req.body.quantity,req.body.price,req.body.status];
            var setOrders = mysql.executeQuery(query,params);
            return resolve(setOrders);
        }catch(e){
            return reject(e);
        }
    })
}

exports.failedOrders = function(req){
    return new Promise((resolve,reject)=>{
        try{
            var query = "INSERT INTO reconcileorders (user_id,product_id,quantity,price) values(?,?,?,?)";
            var params = [req.body.user_id,req.body.product_id,req.body.quantity,req.body.price];
            var setOrders = mysql.executeQuery(query,params);
            return resolve(setOrders);
        }catch(e){
            return reject(e);
        }
    })
}