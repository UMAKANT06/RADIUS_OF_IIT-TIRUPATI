var userModel = require('./userModel');

module.exports.findOneDBServices = (userDetails) =>{
return new Promise(function myFn(resolve, reject){
    userModel.findOne({name:userDetails},function returnData(error, result){
        if(error){
            reject(false);
        }
        else{
            resolve(result);
        }
    });
});
}
