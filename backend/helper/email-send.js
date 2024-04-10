/*app.post("/api/email-send",upload.single(),async(req,res)=>{
    try{
        const{email}=req.body;
        const message = await emailsend(email);
        if (message) {
            res.send({ message: "Email has been sent successfully", status: 1});
          }else{
            res.send({ message: "Email failed", status: 0});
          }
  
    }

    catch(error){
        console.log("error",error);
    }
})
    
  
  app.listen(port, function () {
    console.log(`server running on port http://localhost:${port}`);
  });*/




  const nodemailer = require("nodemailer");
async function emailSend(useremail,sub,otp){
    var transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });
      const info = await transport.sendMail({
        from: "surbhikirar8983@gmail.com",
        to: useremail,
        subject: sub,
        text: "I am unable to take classes for next two days.",
        html: `<b>Hello ${useremail} you otp is ${otp} for reset password, please do not share with anyone.</b>`,
      });
      return info;
}

module.exports=emailSend;