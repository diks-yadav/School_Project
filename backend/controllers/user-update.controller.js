const dbConnect = require("../db/dbConnect");
async function userUpdateByEmailApi(req, res) {
    const email = req.params.email;
    const { firstname, lastname } = req.body;
    if (firstname && lastname) {
        const user = await dbConnect();
        const userFind = await user.findOne({ email: email });
        if (userFind) {
            const userUpdate = await user.updateOne({ email: email }, { $set: { firstname: firstname, lastname: lastname } });
            if (userUpdate) {
                res.send({ message: "user details updated successfully", status: 1 })
            }
            else {
                res.send({ message: "user details updation failed", status: 0 })
            }
        }
        else {
            res.send({ message: "user not found", status: 0 })
        }
    }
    else {
        res.send({ message: "All fields are required", status: 0 })
    }
}

module.exports = { userUpdateByEmailApi }