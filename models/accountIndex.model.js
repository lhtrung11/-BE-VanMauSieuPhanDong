const mongoose = require('mongoose');
const { variable, message } = require('../constants');
const bcrypt = require('bcryptjs');
const random = require('../helpers/random.helper');

const accountIndexSchema = new mongoose.Schema(
    {
        entityId: {
            type: mongoose.Types.ObjectId,
            ref: 'account',
            required: true,
        },
        status: {
            type: Number,
            required: true,
            default: variable.status.account.ACTIVE,
        },
        deleted: {
            type: Number,
            required: true,
            default: variable.status.deleted.FALSE,
        },
    },
    { timestamps: true }
);

// accountSchema.pre('save', function (next) {
//     let account = this;
//     bcrypt.hash(account.password, 10, function (error, hash) {
//         if (error) {
//             return next(error);
//         } else {
//             account.password = hash;
//             next();
//         }
//     });
// });

const AccountIndex = mongoose.model('AccountIndex', accountIndexSchema);

module.exports = AccountIndex;
