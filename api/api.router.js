const express = require('express');
const api = require('./api.controller');

const router = express.Router();

router.all('/', api);

module.exports = router;
