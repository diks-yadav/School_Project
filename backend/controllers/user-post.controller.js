async function userPost(req, res) {
    const { username, email } = req.body;
    user.push({ id: user.length + 1, name: username, email: email });
    res.send({ message: "user pushed successfully", status: 1, users: user });
  }
  module.exports = { userPost };