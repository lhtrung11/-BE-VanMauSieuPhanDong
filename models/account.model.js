const mongoose = require('mongoose');
const { variable, message } = require('../constants');
const bcrypt = require('bcryptjs');

const accountSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            unique: true,
            trim: true,
            required: true,
        },
        password: {
            type: String,
            trim: true,
            required: true,
        },
        title: {
            type: String,
            trim: true,
            default: variable.title.guest,
        },
        avatar: { type: String, required: true },
        role: { type: String, required: true, default: variable.role.guest },
        nickname: {
            type: String,
            required: true,
        },
        status: {
            type: Number,
            required: true,
            default: variable.status.account.ACTIVE,
        },
    },
    { timestamps: true }
);

accountSchema.pre('save', function (next) {
    let user = this;
    bcrypt.hash(user.password, 10, function (error, hash) {
        if (error) {
            return next(error);
        } else {
            user.password = hash;
            next();
        }
    });
});

const Account = mongoose.model('Account', accountSchema);

module.exports = Account;
