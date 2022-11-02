const verifyPerson = (req, res, next) => {
  const array = ['email', 'password', 'firstName', 'phone'];

  array.forEach((element) => {
    if(!(element in req.body)) {
      return res.status(401).json({ "message": `O campo ${element} é obrigatório` });
    }
  });
  next(); // caso todos os campos seja preenchidos, irá para o proximo middleware
}

module.exports = verifyPerson;