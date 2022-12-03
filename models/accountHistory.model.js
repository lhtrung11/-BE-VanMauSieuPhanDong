const mongoose = require('mongoose');
const { variable, message } = require('../constants');

const accountHistorySchema = new mongoose.Schema({
    entityId: {
        type: mongoose.Types.ObjectId,
        ref: 'account',
        required: true,
    },
    action: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now(),
    },
});

const accountHistory = mongoose.model('accountHistory', accountHistorySchema);

module.exports = accountHistory;
