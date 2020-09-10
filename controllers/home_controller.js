

const Customer= require('../models/customer');
const router = require('../routes/users');
module.exports.home = function(req,res){
    return res.end("Welcome to my cab service")
}

module.exports.createsession=  async function(req,res){
   var user= await Customer.findOne({email:req.body.email});

        if(!user){
            Customer.create({
                name:req.body.name,
                email:req.body.email,
                password:req.body.password
            })

            
        }
   return res.render('/');
}


module.exports.login= function(req,res){
    return res.render('login');
}
