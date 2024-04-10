const emailSend = require("../helper/email-send");
async function emailSendController(req, res) {
  try {
    const { email } = req.body;
    const message = await emailSend(email);
    if (message) {
      res.send({ message: "Email has been sent successfully", status: 1 });
    } else {
      res.send({ message: "Email failed", status: 0 });
    }
  } catch (error) {
    console.log("error", error);
  }
}
module.exports = { emailSendController };