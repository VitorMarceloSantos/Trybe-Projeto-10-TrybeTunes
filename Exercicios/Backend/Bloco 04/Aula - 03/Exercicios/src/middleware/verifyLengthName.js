const verifyLengtName = (req, res, next) => {
  const { name } = req.body;

  if(name.length >= 4) {
    next();
  } else {
    return res.status(400).json({ "message": "O campo name deve ter pelo menos 4 caracteres" });
  }
}

module.exports = verifyLengtName;