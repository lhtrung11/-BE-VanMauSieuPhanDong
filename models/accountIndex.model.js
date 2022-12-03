const mongoose = require('mongoose');
const { variable, message } = require('../constants');

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
        point: {
            type: Number,
            required: true,
            default: variable.initNumber.point,
        },
    },
    { timestamps: true }
);

const AccountIndex = mongoose.model('AccountIndex', accountIndexSchema);

module.exports = AccountIndex;
