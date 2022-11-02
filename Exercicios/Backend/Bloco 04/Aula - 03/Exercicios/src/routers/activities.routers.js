const express = require('express');
const router = express.Router();

const verifyContent= require('../middleware/verifyContent');
const writeFile = require('../utils/writeFile');

// Rotas de Activities

router.post('/activities', verifyContent, (req, res) => {
  const newLocale = req.body;
  writeFile(newLocale);

  res.status(201).json({ "message": "Atividade cadastrada com sucesso!" })
});

module.exports = router;
