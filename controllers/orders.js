var orders = require('../biz/orders.biz');
var getOrders = async function(req,res){
    try{
        var getAllOrders = await orders.getOrders(); //Get all the orders that placed
        return res.send(getAllOrders);
    }catch(e){
        return res.send({"status":201,"message":e});
    }
};

var placeOrders = async function(req,res){
    try{
        var setAllOrders = await orders.setOrders(req);  //Place the order to the exchange
        return res.send(setAllOrders);
    }catch(e){
        reConcileOrder(req); // collect failed order to reconcile them
        return res.send({"status":201,"message":e});
    }
}

async function reConcileOrder(req){
    try{
        await orders.failedOrders(req); //collecting failed order to reconcile them
    }catch(e){
        console.log(e.stack);
    }
}
module.exports = {
    getOrders,
    placeOrders
}