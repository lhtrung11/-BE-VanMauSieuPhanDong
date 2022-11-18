module.exports = (output, error) => {
    const formatter = {
        value: error,
        msg: 'Somethings cause error',
        location: 'test',
    };
    return [...output.errors, formatter];
};
