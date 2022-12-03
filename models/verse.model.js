const mongoose = require('mongoose');
const { variable, message } = require('../constants');

const verseSchema = new mongoose.Schema({
    setId: {
        type: mongoose.Types.ObjectId,
        ref: 'verse',
    },
    authorId: {
        type: mongoose.Types.ObjectId,
        ref: 'account',
        required: true,
    },
    content: {
        type: String,
    },
    description: {
        type: String,
    },
    category: { type: [String] },
    referentId: {
        type: mongoose.Types.ObjectId,
        ref: 'verse',
    },
});

const Verse = mongoose.model('Verse', verseSchema);

module.exports = Verse;
