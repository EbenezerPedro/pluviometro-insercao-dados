const { Router } = require('express');
const router = Router();

const { renderPluviometerForm, createPluviometerData } = require('../controllers/pluviometer.controller');

router.get('/pluviometer/new', renderPluviometerForm);
router.post('/pluviometer/new', createPluviometerData);

module.exports = router;