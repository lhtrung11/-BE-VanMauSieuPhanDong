const { imgStorage } = require('../configs/ggdrive');
const errorFormatter = require('../helpers/errorFormatter.helper');
const { message, variable } = require('../constants');
const { Readable } = require('stream');

exports.create = async (Model, input, ModelIndex) => {
    const result = { data: null, errors: [] };
    try {
        result.data = await Model.create(input);
        if (ModelIndex) {
            const index = await ModelIndex.create({
                entityId: result.data._id,
            });
            // console.log(index);
        }
        return result;
    } catch (error) {
        return errorFormatter(result, error);
    }
};

exports.findById = async (Model, id) => {
    try {
        const result = await Model.findById(id);
        return result;
    } catch (error) {
        throw error;
    }
};

exports.upload = async (input) => {
    try {
        let file, result;
        if (input.mimetype.match(variable.regex.image)) {
            file = await imgStorage.files.create({
                requestBody: {
                    name: input.verseId,
                    mimeType: input.mimeType,
                },
                media: {
                    mimeType: input.mimeType,
                    body: Readable.from(input.buffer),
                },
            });
            result = await imgStorage.files.get({
                fileId: file.data.id,
                fields: 'webViewLink, webContentLink',
            });
            console.log({ file, result });
        }
        return result;
    } catch (error) {}
};
