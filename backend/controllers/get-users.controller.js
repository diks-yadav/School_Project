const user = require("../data/user.data");
const dbConnect = require("../db/dbConnect");
async function getUsersControllerfunction(req, res) {
  try {
    const user = await dbConnect();
    const users = await user.find().toArray();
    console.log("users data", users);
    if (users?.length > 0) {
      res.send({
        message: "All Users details fetched successfully",
        status: 1,
        users: users,
      });
    }
    else {
      res.send({
        message: "Not fetched any users",
        status: 0,
      });
    }
  }
  catch (error) {
    console.log("error", error);
    res.send({ message: "Internal Server error", status: 0 })
  }
}

async function getUersByemailApi(req, res) {
  try {
    const email = req.params.email;
    const user = await dbConnect();
    const userFind = await user.findOne({ email: email });
    console.log("users data", userFind);
    if (userFind) {
      res.send({
        message: "User details fetched successfully",
        status: 1,
        users: userFind,
      });
    }
    else {
      res.send({
        message: "Not fetched any users",
        status: 0,
      });
    }
  }
  catch (error) {
    console.log("error", error);
    res.send({ message: "Internal Server error", status: 0 })
  }
}

module.exports = {
  getUsersControllerfunction,
  getUersByemailApi
};
