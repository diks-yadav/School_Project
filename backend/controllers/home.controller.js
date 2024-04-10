async function homeController(req, res) {
    res.send({ message: "hello world! at home url", status: 1 });
  }
  
  module.exports = { homeController };