var authUser = require('../biz/auth.biz');
var getAuthUser = async function(req,res){
    try{
        var getUser = await authUser.authUserDetail(req); //authenticate user with header key_id and secret key
        return res.send(getUser);
    }catch(e){
        return res.send({"status":201,"message":e});
    }
}

module.exports = {
    getAuthUser
}