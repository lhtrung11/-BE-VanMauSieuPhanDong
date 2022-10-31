const dataTransfer = require('../helpers/dataTransfer.helper');
const path = require('../constants').variable.path;

module.exports = (req, res, next) => {
    try {
        switch (req.baseUrl + req.path) {
            case path.register: {
                req.input = dataTransfer.registerForm(req.body);
                break;
            }
            default: {
            }
        }
        next();
    } catch (error) {}
};
