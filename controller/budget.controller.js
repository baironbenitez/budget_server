
const { Budget } = require('../schema/budget.schema')

const createBudget = async (req, res) => {
    const { userId } = req.body;
    res.json({
        ok: true,
        userId
    })
}

module.exports = {
    createBudget
}