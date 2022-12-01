const mongoose = require('mongoose');
const { variable, message } = require('../constants');

const verseIndexSchema = new mongoose.Schema(
    {
        entityId: {
            type: mongoose.Types.ObjectId,
            ref: 'verse',
            required: true,
        },
        status: {
            type: Number,
            required: true,
            default: variable.status.verse.ACTIVE,
        },
        deleted: {
            type: Number,
            required: true,
            default: variable.status.deleted.FALSE,
        },
    },
    { timestamps: true }
);

const VerseIndex = mongoose.model('VerseIndex', verseIndexSchema);

module.exports = VerseIndex;
