const path = require('../constants').variable.path;
const { checkSchema, validationResult } = require('express-validator');
const schema = require('../models/schemas/schema');

const urlSchema = {
    [path.register]: schema.register,
    [path.login]: schema.login,
    [path.refresh]: schema.refresh,
};

module.exports = (req, res, next) => {
    checkSchema(urlSchema[req.baseUrl + req.path]);
    // checkSchema(schema.register);

    next();
};
