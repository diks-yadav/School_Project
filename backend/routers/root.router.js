const express = require("express");
const Router = express.Router();
const multer = require("multer");
const upload = multer();
const checkFields = require("../middleware/check-fields");
const emailSend = require("../helper/email-send");
const rootController = require("../controllers/root.controller");
const homeController = require("../controllers/home.controller");
const registerController = require("../controllers/register.controller");
const loginController = require("../controllers/login.controller");
const getUsersController = require("../controllers/get-users.controller");
const userPostController = require("../controllers/user-post.controller");
const emailSendController = require("../controllers/email-send.controller");
const userUpdateController=require("../controllers/user-update.controller");
const userDeleteController=require("../controllers/user-delete.controller");
const forgotPasswordController=require("../controllers/forgot-password.controller");

Router.get("/", rootController.rootController);
Router.get("/home", homeController.homeController);
//post register api
Router.post(
  "/register",
  upload.single(),
  registerController.registerController
);
Router.post("/login", upload.single(), loginController.loginController);
//get-users api
Router.get("/api/get-users", getUsersController.getUsersControllerfunction);

//get-user by email api
Router.get("/api/get-usersbyemail/:email", getUsersController.getUersByemailApi);
//user-post api
Router.post("/api/user-post", upload.single(), userPostController.userPost);
//email-send api
Router.post("/api/email-send", checkFields, emailSendController.emailSendController);


//user-update by email
Router.post("/api/user-updatebyEmail/:email",upload.single(),userUpdateController.userUpdateByEmailApi)

//user-deleta by email
Router.post("/api/user-deletebyEmail/:email",upload.single(),userDeleteController.userDeleteByEmailApi)

Router.post("/api/alluser-delete",userDeleteController.allUserDeleteApi);
//forgot-password api
Router.post("/api/forgot-password",forgotPasswordController.forgotPasswordApi);
//otp-verify api
Router.post("/api/otp-verify",forgotPasswordController.otpVerifyApi);
//reset-password api
Router.post("/api/reset-password",forgotPasswordController.resetPasswordApi);
module.exports = Router;
