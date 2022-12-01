module.exports = (okStatus, failStatus, okMsg, failMsg, output, res) => {
    if (output.errors?.length > 0)
        res.status(failStatus).json({
            description: failMsg,
            errors: {
                list: output.errors,
                total: output.errors.length,
            },
        });
    else {
        res.status(okStatus).json({
            description: okMsg,
            data: output.data,
        });
    }
};
