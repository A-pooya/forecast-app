const {Router} = require('express');
const {saveForecastApi} = require('../controller/apiController');

const router = new Router();

router.post("/saveForecastApi", saveForecastApi)

module.exports = router