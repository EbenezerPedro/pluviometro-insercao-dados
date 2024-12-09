const { Router } = require('express');
const router = Router();

const { renderDadosForm, processarPesquisa } = require('../controllers/dados.controller');

router.get('/dados-coletados', renderDadosForm);
router.post('/dados-coletados', processarPesquisa);  // Aqui, o backend agora retorna JSON

module.exports = router;
