const validateTypeTransaction = (req, res, next ) => {
    const { type } = req.body;
    if (type != 1 && type != 2) {
        res.status(400).json({
            ok: false,
            message: 'Tipo de transaccion no valida',
            statusCode: 400,
            data: { type }
        });
    }else{
        next();
    }
}


const signType = (type) => {
    switch (type) {
        case 2:
            return -1;    
        default:
            return 1;
    }
} 


module.exports = {
    signType,
    validateTypeTransaction
}