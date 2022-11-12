const express = require('express');
const { check } = require('express-validator');
const router = express.Router();
const { createBudget, getBudget } = require('../controller/budget.controller');
const { validateErrors } = require('../middlewares/valitadateErros');

router.post(
    '/',
    check('amount').isNumeric().withMessage('El monto debe ser un numero')
    .isLength({ min: 1 }).withMessage('El presupuesto minimo es 1'),
    validateErrors,
    createBudget
);

router.get('/',getBudget);

module.exports = router;