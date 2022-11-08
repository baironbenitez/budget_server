const { Budget } = require('../schema/budget.schema');

const existBudget = async (user) => {
    return await Budget.findOne({ user });
}

module.exports = {
    existBudget
}