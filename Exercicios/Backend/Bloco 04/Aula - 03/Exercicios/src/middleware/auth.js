const auth = (req, res, next) => {
  const authToken = req.headers;

  if(!authToken || authToken.length !== 16) {
    return res.status(401).json({ message: 'Token inválido!' });
  }
}

module.exports = auth;