const express = require('express');
const router = express.Router();

// MiddleWares
const verifyPerson = require('../middleware/verifyPerson');

// Token - Exemplo: 6242e2ba4dc096d6
const createToken = require('../utils/createToken');

// Rotas de Activities

router.post('/signup', verifyPerson, (req, res) => {

  const token = createToken();
  res.status(200).json({ token: token });
});

module.exports = router;