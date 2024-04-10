const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors=require('cors');
app.use(cors());
dotenv.config();
app.use(bodyParser.json());
const rootRouter = require("./routers/root.router");
app.use("/", rootRouter);
app.listen(process.env.PORT, function () {
  console.log(`server running on port http://localhost:${process.env.PORT}`);
});
