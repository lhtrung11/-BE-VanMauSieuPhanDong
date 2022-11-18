const errorFormatter = require('../helpers/errorFormatter.helper');

exports.create = async (Model, input) => {
    const result = { data: null, errors: [] };
    try {
        result.data = await Model.create(input);
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
