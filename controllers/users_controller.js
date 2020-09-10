
const Customer= require('../models/customer');

module.exports.showuser=async function(req,res){

    var customer =await Customer.find({});
    // console.log(customer)
    return res.json(200,{
        message:"all users",
        customer:customer
    })

}