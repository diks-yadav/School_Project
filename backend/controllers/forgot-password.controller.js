const dbConnect = require('../db/dbConnect');
const emailSend = require('../helper/email-send');

async function forgotPasswordApi(req, res) {
    try {
        const email = req.body.email;
        console.log("email", email);
        const otpGenerator = require('otp-generator')
        const otp = otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false, lowerCaseAlphabets: false });
        const message = await emailSend(email, "Reset Password", otp)
        if (message) {
            const user = await dbConnect();
            const otpUpdate = await user.updateOne({ email: email }, { $set: { otp: otp } });
            console.log("otpUpdate", otpUpdate);
            if (otpUpdate) {
                res.send({ message: "otp sent in your email address and updated successfully", status: 1, otp: otp });
            }
            else {
                res.send({ message: "otp sent in your email address but not updated", status: 0 });
            }
        } else {
            res.send({ message: "otp sent failed", status: 0 });
        }

    }
    catch (error) {
        res.send({ message: "Internal Server Error", status: 0, error: error });
    }
}
async function otpVerifyApi(req, res) {
    try {
        const otp = req.body.otp;
        const email = req.body.email;
        const user = await dbConnect();
        const userFind = await user.findOne({ email: email });
        if (userFind.otp == otp) {
            res.send({ message: "verified successfully", status: 1 });
        }
        else {
            res.send({ message: "verification failed,please enter valid otp", status: 0 });

        }
    }
    catch (error) {
        res.send({ message: "Internal Server Error", status: 0 });
    }
}

async function resetPasswordApi(req, res) {
    try {
        const password = req.body.password;
        const newPassword = req.body.newPassword;
        const email = req.body.email;
        const user = await dbConnect();
        const userUpdate = await user.updateOne({ email: email }, { $set: { password: password } });
        if (userUpdate) {
            res.send({ message: "user password reset successfully", status: 1 });
        }
        else {
            res.send({ message: "user password reset failed", status: 0 });
        }
    }
    catch (error) {
        res.send({ message: "Internal Server Error", status: 0 });
    }
}

module.exports = { forgotPasswordApi, otpVerifyApi,resetPasswordApi }