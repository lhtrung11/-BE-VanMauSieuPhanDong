module.exports = (okStatus, failStatus, okMsg, failMsg, output, res) => {
    if (!output.errors)
        res.status(failStatus).json({
            description: failMsg,
            errors: {
                list: output.errors,
                total: '',
            },
        });
    else {
        res.status(okStatus).json({
            description: okMsg,
            data: output.data,
        });
    }
};
