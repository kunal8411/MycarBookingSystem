
const User=require('../../models/customer');
const jwt=require('jsonwebtoken');

//for login page, validate login information of user
module.exports.creteSession= async function(req,res){

    try{    
        let user= await User.findOne({email:req.body.email});
        if(!user || user.password != req.body.password){
            return res.json(422,{
                message:"invalid Username/Passeord"

            })
 
        }

        //if found and password matches
        return res.json(200,{
           message:"sign in is successfull, here is your token, please keep it safe",
           data:{
               //use jwt to create a token, codeail is key for encry/decry and time of token-->1 min, mentioned in milliseconds 
               token:jwt.sign(user.toJSON(),'codeail',{expiresIn:'100000'})
           }

        })
    }catch{
        console.log('**********',err);
       
        return res.json(500,{
            message:"Internal server error !"
        });
    }
    

    
}