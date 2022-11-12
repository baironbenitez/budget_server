const { Transaction } = require('../schema/transaction.schema');
const { existBudget } = require('../middlewares/budget');

const createTransaction = async (req, res) => {

    const user = req.user;

    try {
        const findBudget = await existBudget(user);

        if (!findBudget) {
            res.status(400).json({
                ok: false,
                message: 'El usuario no tiene un presupuesto creado',
                data: { },
                statusCode: 400
            });
            return
        }

        const { budget } = req.params;
        const { amount, type } = req.body;

        const transactionData = { budget, amount, type };
        const transaction =  await Transaction.create(transactionData);     

        res.json({
            ok: true,
            message: 'Transaccion creada con exito',
            data: {
                transaction
            },
            statusCode: 200
        });

    } catch (error) {
        const message = error.message;
        res.status(500).json({
            ok: false,
            message: 'Hubo un error creando la transaccion',
            data: { message },
            statusCode: 500
        });
    }
}

module.exports = {
    createTransaction
}