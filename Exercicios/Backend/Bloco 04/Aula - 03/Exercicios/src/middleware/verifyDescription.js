const verifyDescription = (req, res, next) => {
  const array = ['rating', 'difficulty', 'createdAt'];

  array.forEach((element) => {
    if(!(element in req.body.description)) {
      return res.status(400).json({ "message": `O campo ${element} é obrigatório` });
    }
  });
  next(); // caso todos os campos seja preenchidos, irá para o proximo middleware
}

module.exports = verifyDescription;