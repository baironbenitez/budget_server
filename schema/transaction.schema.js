const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const TransactionSchema = new Schema({
    amount: {
        type: Number,
        required: true,
    },
    type: {
        type: Number,
        required: true
    },
    budget:{
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
            delete ret.budget
            delete ret._id;
            delete ret.__v;
        }
    }
});

const Transaction = mongoose.model('Transaction', TransactionSchema);

module.exports  = {
    Transaction
}
