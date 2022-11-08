const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const BudgetSchema = new Schema({
    amount: {
        type: String,
        require: true,
        unique: true
    },
    createAt: {
        type: Date,
        default: new Date()
    },
    update:{
        type: Date,
    }
},
{
    toJSON:{
        transform: function (doc, ret) {
            ret.id = ret._id;
            delete ret._id;
            delete ret.__v;
        }
    }
});

const Budget = mongoose.model('Budget', BudgetSchema);

module.exports  = {
    Budget
}
