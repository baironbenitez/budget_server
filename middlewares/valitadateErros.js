const  { validationResult } = require('express-validator')

const validateErrors = (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        next();
    }else{ 
        res.status(400).json({
            ok: false,
            message: 'Todos los campos son obligatorios',
            statusCode: 400,
            data: errors
        });
    }
}

module.exports = {
    validateErrors
}