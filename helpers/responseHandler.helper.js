const { message, variable } = required('../constants/index.js');

module.exports = (res, data) => {
    res.status(variable.httpStatus.OK).json({ data });
};
