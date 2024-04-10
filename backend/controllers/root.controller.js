async function rootController(req, res) {
    res.send({ message: "hello world!", status: 1 });
  }
  
  module.exports = {rootController};