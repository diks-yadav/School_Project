const dbConnect=require("../db/dbConnect");
async function loginController(req, res) {
    const { email, password } = req.body;
    if(email&&password){
      const user=await dbConnect();
      const userFind=await user.findOne({email:email});
      console.log("userFind",userFind);
      if(userFind){
        if(password===userFind.password){
          res.send({message:"Login successfully",status:1});
        }
        else{
          res.send({message:"Please enter valid email or password",status:0});
        }
      }
      else{
        res.send({message:"User Not Found ,Please Register with us",status:0});
      }
    }
    else{
      res.send({message:"email or password field can not be blank"});
    }
  }
  module.exports = { loginController };