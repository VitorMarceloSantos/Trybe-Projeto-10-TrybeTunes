const verifyPrice = (req, res, next) => {
  const price = Number(req.body.price);

  if(price >= 0) {
    next();
  } else {
    return res.status(400).json({ "message": "O campo price deve ser um número maior ou igual a zero" });
  }
}

module.exports = verifyPrice;