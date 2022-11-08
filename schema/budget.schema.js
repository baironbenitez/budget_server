const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const BudgetSchema = new Schema({
    amount: {
        type: Number,
        required: true,
        unique: true
    },
    user:{
        required: true,
        type: mongoose.Types.ObjectId
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
            delete ret.user;
        }
    }
});

const Budget = mongoose.model('Budget', BudgetSchema);

module.exports  = {
    Budget
}
