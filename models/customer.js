const mongoose= require('mongoose');


const userSchema = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type: String
    },
    password:{
        type: String
    },
    address:[{
        origin:{type:String},
        destination:{type:String}
    
    }]

    
},  {
        timestamps: true
});


const Customers=mongoose.model('Customers',userSchema); 

module.exports= Customers;


module.exports.register=function(info,callback){
    userid= info['userid'];
    origin= info['origin'];
    destination= info['destination'];

    var query= {_id:userid}
    
    Customers.findByIdAndUpdate(
        userid,
        {$push:{"address":{origin:origin, destination: destination}}},
        {safe: true, upsert: true},
        callback
    )
}

