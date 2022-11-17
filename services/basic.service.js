exports.create = async (Model, input) => {
    try {
        const result = await Model.create(input);
        return result;
    } catch (error) {
        throw error;
    }
};
