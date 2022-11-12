const { Budget } = require('../schema/budget.schema');
const { Transaction } = require('../schema/transaction.schema');
const { existBudget } = require('../middlewares/budget');
const { signType } = require('../middlewares/transaction');

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

const getBudget = async (req, res) => {

    const user = req.user;

    try {
        const findBudget = await existBudget(user)

        if (!findBudget) {
            res.status(404).json({
                ok: false,
                message: 'El usuario no tiene un presupuesto creado',
                data: { },
                statusCode: 404
            });
            return
        }

        const transactions = await Transaction.find({ budget: findBudget.id });

        const budgetAmountRestant = transactions.reduce((previus,current)=>{
            return previus + (signType(current.type)*current.amount);
        },0) + findBudget.amount;

        res.json({
            ok: true,
            message: 'Consulta exitosa',
            data: {
                budgetAmount: findBudget.amount,
                budgetAmountRestant,
                transactions
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
    createBudget,
    getBudget
}