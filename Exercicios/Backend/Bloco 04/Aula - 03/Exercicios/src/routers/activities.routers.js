const express = require('express');
const router = express.Router();

const verifyContent= require('../middleware/verifyContent');
const writeFile = require('../utils/writeFile');
const verifyLengtName = require('../middleware/verifyLengthName');
const verifyPrice = require('../middleware/verifyPrice');
const verifyDescription = require('../middleware/verifyDescription');
const verifyCreateAt = require('../middleware/verifyCreateAt');
const verifyRating = require('../middleware/verifyRating');
const verifyDifficulty = require('../middleware/verifyDifficulty');

// Rotas de Activities

router.post('/activities', verifyContent, verifyLengtName, verifyPrice, verifyDescription, verifyCreateAt, verifyRating, verifyDifficulty,(req, res) => {
  const newLocale = req.body;
  writeFile(newLocale);

  res.status(201).json({ "message": "Atividade cadastrada com sucesso!" })
});

module.exports = router;
