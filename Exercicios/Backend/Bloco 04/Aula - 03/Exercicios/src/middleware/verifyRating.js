const verifyRating = (req, res, next) => {
  const { description: {rating}} = req.body;

  if(Number(rating) >=1 && Number(rating) <= 5) {
    next();
  } else {
    return res.status(400).json({ "message": "O campo rating deve ser um número inteiro entre 1 e 5" });
  }
}

module.exports = verifyRating;