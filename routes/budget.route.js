const express = require('express');
const router = express.Router();
const { createBudget } = require('../controller/budget.controller')

router.post('/',createBudget);

module.exports = router;