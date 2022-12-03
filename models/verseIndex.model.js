const mongoose = require('mongoose');
const { variable, message } = require('../constants');

const verseIndexSchema = new mongoose.Schema(
    {
        entityId: {
            type: mongoose.Types.ObjectId,
            ref: 'verse',
            required: true,
        },
        detail: {
            size: Number,
            fileType: {
                type: String,
                enum: variable.defaultValue.defaultFileType,
            },
            original: String,
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
        views: {
            type: Number,
            required: true,
            default: variable.initNumber.views,
        },
        citationCount: {
            comment: {
                type: Number,
                required: true,
                default: variable.initNumber.comment,
                min: 0,
            },
            reference: {
                type: Number,
                required: true,
                default: variable.initNumber.reference,
                min: 0,
            },
        },
        cost: {
            type: Number,
            required: true,
            default: variable.initNumber.cost,
            min: 0,
        },
    },
    { timestamps: true }
);

const VerseIndex = mongoose.model('VerseIndex', verseIndexSchema);

module.exports = VerseIndex;
