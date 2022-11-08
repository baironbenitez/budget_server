const { Budget } = require('../schema/budget.schema');
const { existBudget } = require('../middlewares/budget');

const createBudget = async (req, res) => {

    const { amount } = req.body
    const user = req.user;

    const budgetData = {
        amount,
        user
    }

    try {
        const findBudget = await existBudget(user)

        if (findBudget) {
            res.status(400).json({
                ok: false,
                message: 'El usuario ya tiene un presupuesto creado',
                data: { },
                statusCode: 400
            });
            return
        }

        const budget =  await Budget.create(budgetData);     

        res.json({
            ok: true,
            message: 'Presupuesto creado con exito',
            data: {
                budget
            },
            statusCode: 200
        });

    } catch (error) {
        const message = error.message;
        res.status(500).json({
            ok: false,
            message: 'Hubo un error creando el presupuesto',
            data: { message },
            statusCode: 500
        });
    }
}

module.exports = {
    createBudget
}