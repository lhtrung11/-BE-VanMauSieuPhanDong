const mongoose = require('mongoose');
const { variable, message } = require('../constants');
const bcrypt = require('bcryptjs');
const random = require('../helpers/random.helper');

const accountSchema = new mongoose.Schema({
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
        default: variable.defaultValue.defaultPassword,
    },
    email: {
        type: String,
        trim: true,
    },
    title: { type: [String], default: ['Anonymous'] },
    avatar: {
        type: String,
        required: true,
        default: variable.defaultValue.defaultFile.defaultAvatarValue,
    },
    role: { type: String, required: true, default: variable.role.guest },
    nickname: {
        type: String,
        required: true,
        default: random.nickname,
    },
});

accountSchema.pre('save', function (next) {
    let account = this;
    bcrypt.hash(account.password, 10, function (error, hash) {
        if (error) {
            return next(error);
        } else {
            account.password = hash;
            next();
        }
    });
});

const Account = mongoose.model('Account', accountSchema);

module.exports = Account;
