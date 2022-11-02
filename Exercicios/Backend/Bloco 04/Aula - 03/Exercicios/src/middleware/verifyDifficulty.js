const verifyDifficulty = (req, res, next) => {
  const array = ['Fácil', 'Médio', 'Difícil'];
  const { description: {difficulty}} = req.body;
  
  if(array.some((element) => element === difficulty)) {
    next();
  } else {
    return res.status(400).json({ "message": "O campo difficulty deve ser \'Fácil\', \'Médio\' ou \'Difícil\'" });
  }
}

module.exports = verifyDifficulty;