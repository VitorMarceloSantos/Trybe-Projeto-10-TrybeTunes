const express = require('express');
const router = express.Router();

const verifyContent= require('../middleware/verifyContent');
const writeFile = require('../utils/writeFile');
const verifyLengtName = require('../middleware/verifyLengthName');
const verifyPrice = require('../middleware/verifyPrice');

// Rotas de Activities

router.post('/activities', verifyContent, verifyLengtName, verifyPrice,(req, res) => {
  const newLocale = req.body;
  writeFile(newLocale);

  res.status(201).json({ "message": "Atividade cadastrada com sucesso!" })
});

module.exports = router;
