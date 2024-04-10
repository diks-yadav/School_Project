const dbConnect = require("../db/dbConnect");

async function registerController(req, res) {
  console.log("req.body data: ", req.body);
  const { firstname, lastname, email, password } = req.body;
  if (firstname && lastname && email && password) {
    const users = await dbConnect();
    const userFind = await users.findOne({ email: email });
    if (userFind) {
      res.send({ message: "user already registered with us please login!", status: 0 });
    }
    else {
      const userInsert = await users.insertOne({ firstname, lastname, email, password,otp:'' });
      console.log("userInsert", userInsert);
      if (userInsert) {
        res.send({
          message: "registration success!",
          status: 1,
        });
      }
      else {
        res.send({
          message: "user registration failed!",
          status: 0,
        });
      }
    }

  } else {
    res.send({
      message: "All fields required",
      status: 0,
    });
  }
}

module.exports = { registerController };