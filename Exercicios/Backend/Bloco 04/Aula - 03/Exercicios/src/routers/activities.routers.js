const express = require('express');
const router = express.Router();

const verifyName = require('../middleware/verifyName');

// Rotas de Activities

router.post('/activities', verifyName, (req, res) => {
  res.status(201).json({ "message": "Atividade cadastrada com sucesso!" })
});

module.exports = router;
