const express = require('express');
const { variable } = require('../constants');
const verseController = require('../controllers/verse.controller');
const validateInput = require('../middlewares/validateInput.middleware');
const schema = require('../models/schemas/schema');
const verifyCredential = require('../middlewares/verifyCredential.middleware');

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'assets');
//     },
//     filename: (req, file, cb) => {
//         let extArray = file.mimetype.split('/');
//         let extension = extArray[extArray.length - 1];
//         cb(null, Date.now() + '.' + extension);
//     },
// });
const Router = express.Router();

Router.route('/').post(
    verifyCredential,
    validateInput(schema.createVerse, variable.validateType.createVerse),
    // multer().array('contents'),
    verseController.createVerse
);
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
