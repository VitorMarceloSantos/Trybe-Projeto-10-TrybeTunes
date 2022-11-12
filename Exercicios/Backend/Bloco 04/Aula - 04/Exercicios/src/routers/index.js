// Faz o gerenciamento de todas as rotas
const express = require('express');
const router = express.Router();

const activitiesRouter = require('./activities.routers');
const signupRouter = require('./signup.routers');

// Pode importar diversas rotas
router.use(activitiesRouter);
router.use(signupRouter);

module.exports = router;