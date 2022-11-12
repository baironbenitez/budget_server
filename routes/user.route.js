const express = require('express');
const  { check } = require('express-validator')
const router = express.Router();
const { createUser }  = require('../controller/user.controller');
const { findUserByUsername } = require('../middlewares/user');
const { validateErrors } = require('../middlewares/valitadateErros');

router.post(
    '/',
    [
        check('name').trim()
        .notEmpty().withMessage('El nombre no puede estar vacio'),
        check('username').trim()
        .notEmpty().withMessage('El nombre de usuario es requerido')
        .not().matches(/\s+/g).withMessage('El nombre de usuario no debe tener espacios en blanco')
        .isLength({min: 6}).withMessage('El nombre de usuario debe tener minimo 6 caracteres'),
        check('password').trim()
        .notEmpty().withMessage('La contraseña es requerida').isLength({min: 6})
        .withMessage('La contraseña debe tener minimo 6 caracteres')
    ],
    validateErrors,
    findUserByUsername,
    createUser
);

module.exports = router;