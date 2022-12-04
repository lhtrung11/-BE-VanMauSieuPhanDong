const express = require('express');
const verseController = require('../controllers/verse.controller');
const validateInput = require('../middlewares/validateInput.middleware');
const schema = require('../models/schemas/schema');

const Router = express.Router();

Router.route('/')
    // .get(verseController.getAllDocument)
    .post(verseController.createVerse);
// Router.route("/:docId")
//     .get(docController.getDocument)
//     .put(verifyToken, docController.editDocument)
//     .delete(verifyToken, docController.deleteDocument);
// Router.route("/:docId/favourite").patch(
//     verifyToken,
//     docController.favouriteDocument
// );
// Router.route("/:docId/vote").patch(verifyToken, docController.voteDocument);

module.exports = Router;
