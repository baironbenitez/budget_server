const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const UserSchema = new Schema({
    username: {
        type: String,
        require: true,
        unique: true
    },
    name: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    createAt: {
        type: Date,
        default: new Date()
    }
},
{
    toJSON:{
        transform: function (doc, ret) {
            ret.id = ret._id;
            delete ret.password;
            delete ret._id;
            delete ret.__v;
        }
    }
});

const User = mongoose.model('User', UserSchema);

module.exports  = {
    User
}
