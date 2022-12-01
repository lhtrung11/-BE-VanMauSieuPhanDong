const mongoose = require('mongoose');
const { variable, message } = require('../constants');

const verseHistorySchema = new mongoose.Schema({
    entityId: {
        type: mongoose.Types.ObjectId,
        ref: 'verse',
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

const VerseHistory = mongoose.model('VerseHistory', verseHistorySchema);

module.exports = VerseHistory;
