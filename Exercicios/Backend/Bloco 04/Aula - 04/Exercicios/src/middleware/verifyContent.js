const verifyContent = (req, res, next) => {
  const array = ['name', 'price', 'description'];

  array.forEach((element) => {
    if(!(element in req.body)) {
      return res.status(400).json({ "message": `O campo "${element} é obrigatório` });
    }
  });
  next(); // caso todos os campos seja preenchidos, irá para o proximo middleware
}

module.exports = verifyContent;
