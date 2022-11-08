const express = require('express');
const  { check } = require('express-validator')
const router = express.Router();

const { validateErrors } = require('../middlewares/valitadateErros');
const { login } = require('../controller/auth.controller');
const { validateUserExistByUsername } = require('../middlewares/auth');
const { comparePassword } = require('../middlewares/password');

router.post(
    '/login',
    [
        check('username').trim()
        .notEmpty().withMessage('El nombre de usuario es requerido'),
        check('password').trim()
        .notEmpty().withMessage('La contraseña es requerida').isLength({min: 6})
    ],
    validateErrors,
    validateUserExistByUsername,
    comparePassword,
    login
);

module.exports = router;