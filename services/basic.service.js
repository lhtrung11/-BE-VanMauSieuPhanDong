const errorFormatter = require('../helpers/errorFormatter.helper');

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
