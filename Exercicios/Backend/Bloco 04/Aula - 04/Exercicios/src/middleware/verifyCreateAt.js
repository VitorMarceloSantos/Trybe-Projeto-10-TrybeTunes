const verifyCreateAt = (req, res, next) => {
  const { description: { createdAt }} = req.body;
  const testDate = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/;

  if(testDate.test(createdAt)) {
    next();
  } else {
    return res.status(400).json({ "message": "O campo createdAt deve ter o formato \'dd/mm/aaaa\'" });
  }
}

module.exports = verifyCreateAt;