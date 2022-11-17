exports.create = async (Model, input) => {
    try {
        const result = await Model.create(input);
        return result;
    } catch (error) {
        throw error;
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
