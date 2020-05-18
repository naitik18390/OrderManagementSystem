var products = require('../biz/products.biz');
var getProducts = async function(req,res){
    try{
        var getAllProducts = await products.getProdcuts();
        return res.send(getAllProducts);
    }catch(e){
        console.log(e);
    }
}

module.exports = {
    getProducts
}