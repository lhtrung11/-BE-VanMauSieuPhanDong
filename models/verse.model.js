const mongoose = require('mongoose');
const { variable, message } = require('../constants');
const bcrypt = require('bcryptjs');
const random = require('../helpers/random.helper');

const verseSchema = new mongoose.Schema({
    setId: {
        type: mongoose.Types.ObjectId,
        required: true,
    },
    authorId: {
        type: mongoose.Types.ObjectId,
        ref: 'account',
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
});

const Verse = mongoose.model('Verse', verseSchema);

module.exports = Verse;
