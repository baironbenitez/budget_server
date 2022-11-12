const express = require('express');
const  { check, param } = require('express-validator');
const router = express.Router();

const  { createTransaction } = require('../controller/transaction.controller');
const  { validateTypeTransaction } = require('../middlewares/transaction');
const { validateErrors } = require('../middlewares/valitadateErros');

router.post(
    '/:budget',
    param('budget').isMongoId().withMessage('Id no valido'),
    validateErrors,
    [
        check('amount').isNumeric().withMessage('El monto debe ser un numero')
        .isLength({ min: 1 }).withMessage('La transaccion minima es de 1'),
        check('type').isNumeric().withMessage('Tipo de transacion no valida')
    ],
    validateErrors,
    validateTypeTransaction,
    createTransaction
);

module.exports = router;