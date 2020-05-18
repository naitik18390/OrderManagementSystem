var products = require('../biz/products.biz');
var getProducts = async function(req,res){
    try{
        var getAllProducts = await products.getProdcuts(); //Get all the Product Info
        return res.send(getAllProducts);
    }catch(e){
        return res.send({"status":201,"message":e});
    }
}

module.exports = {
    getProducts
}