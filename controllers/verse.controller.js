const mongoose = require('mongoose');
const Verse = require('../models/verse.model');
const VerseIndex = require('../models/verseIndex.model');
const VerseHistory = require('../models/verseHistory.model');
const basicService = require('../services/basic.service');
const verseService = require('../services/verse.service');
const response = require('../helpers/responseHandler.helper');
const { message, variable } = require('../constants');

// const User = require("../models/user.model");

// exports.getDocument = async (req, res, next) => {
//     try {
//         const { docId } = req.params;
//         const doc = await Doc.findById(docId).populate("userId", "name title");
//         res.status(200).json({
//             status: "success",
//             data: { doc },
//         });
//     } catch (error) {}
// };

// exports.getAllDocument = async (req, res, next) => {
//     try {
//         const docs = await Doc.find({}).populate("userId", "name title");
//         res.status(200).json({
//             status: "success",
//             results: docs.length,
//             data: { docs },
//         });
//     } catch (error) {}
// };

exports.createVerse = async (req, res, next) => {
    const output = await basicService.create(
        Verse,
        {
            description: req.input.description,
            authorId: req.private._id,
        },
        VerseIndex
    );
    if (req.input?.contents.length > 0) {
        req.input.contents.forEach(async (content) => {
            const verseId = new mongoose.Types.ObjectId();
            const saved = await basicService.upload({ ...content, verseId });
            await basicService.create(
                Verse,
                {
                    _id: verseId,
                    setId: output.data?._id,
                    authorId: output.data?.authorId,
                },
                VerseIndex
            );
        });
    }
    // const output = { data: req.input, errors: [] };
    response(
        variable.httpStatus.CREATED,
        variable.httpStatus.CONFLICT,
        message.CREATE_SUCCESS,
        message.CREATE_FAIL,
        output,
        res
    );
};

// exports.editDocument = async (req, res, next) => {
//     try {
//         const { userId } = req.user;
//         const { docId } = req.params;
//         const doc = await Doc.findOneAndUpdate(
//             { _id: docId, userId: userId },
//             { ...req.body },
//             { new: true, runValidators: true }
//         );
//         res.status(200).json({
//             status: "success",
//             data: { doc },
//         });
//     } catch (error) {}
// };

// exports.deleteDocument = async (req, res, next) => {
//     try {
//         const { userId } = req.user;
//         const { docId } = req.params;
//         await Doc.findOneAndDelete({ _id: docId, userId: userId });
//         await User.findByIdAndUpdate(userId, { $pull: { docs: docId } });
//         res.status(200).json({
//             status: "success",
//             message: "Delete document successfully",
//         });
//     } catch (error) {}
// };

// const checkExistAndAdjust = (arr, item) => {
//     return arr.includes(item)
//  arr.filter((element) => element !== item)
//         : [...arr, item];
// };

// exports.voteDocument = async (req, res, next) => {
//     try {
//         const { userId } = req.user;
//         const { docId } = req.params;
//         const { vote } = await Doc.findById(docId).select("vote");
//         const doc = await Doc.findByIdAndUpdate(docId, {
//             vote: checkExistAndAdjust(vote, userId),
//         }).select("vote");
//         res.status(200).json({
//             status: "success",
//             message: "vote successfully",
//             data: { doc },
//         });
//     } catch (error) {}
// };

// exports.favouriteDocument = async (req, res, next) => {
//     try {
//         const { userId } = req.user;
//         const { docId } = req.params;
//         const { favourite } = await User.findById(userId).select("favourite");
//         const user = await User.findByIdAndUpdate(userId, {
//             favourite: checkExistAndAdjust(favourite, docId),
//         }).select("favourite");
//         res.status(200).json({
//             status: "success",
//             message: "chua lam",
//             data: { user },
//         });
//     } catch (error) {}
// };
