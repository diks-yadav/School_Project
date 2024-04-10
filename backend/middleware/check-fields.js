async function checkFields(req, res, next) {
  if (req.body.email) {
    next();
  } else {
    res.send({ message: "Required All fields", status: 0 });
  }
}

module.exports = checkFields;