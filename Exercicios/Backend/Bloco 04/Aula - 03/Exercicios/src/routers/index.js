// Faz o gerenciamento de todas as rotas
const express = require('express');
const router = express.Router();

const activitiesRouter = require('./activities.routers');

// Pode importar diversas rotas
router.use(activitiesRouter);

module.exports = router;