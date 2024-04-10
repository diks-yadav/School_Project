const userData=require("../data/user.data");
const dbConnect = require("../db/dbConnect");
async function userDeleteByEmailApi(req,res){
    const email=req.params.email;
   const user=await dbConnect();
   const userFind=await user.findOne({email:email});
   if(userFind){
    const userDelete=await user.deleteOne({email:email});
    if(userDelete){
        res.send({ message: "user deleted successfully", status: 1 })
    }
    else{
        res.send({ message: "user delete failed", status: 0 })
    }
   }
   else{
    res.send({ message: "user Not Found", status: 0 })
   }
}

async function allUserDeleteApi(req,res){
   const user=await dbConnect();
    const userDelete=await user.deleteMany();
    if(userDelete){
        res.send({ message: "user deleted successfully", status: 1 })
    }
    else{
        res.send({ message: "user delete failed", status: 0 })
    }
}

module.exports={userDeleteByEmailApi,allUserDeleteApi}