const jwt = require('jsonwebtoken');
const { variable } = require('../constants');

const createToken = (data, options) => {
    return jwt.sign(data, variable.env.key, options);
    // return token = jwt.sign(
    //     { userId: user._id, role: user.role },
    //     process.env.APP_SECRET,
    //     { expiresIn: '2h' }
    // );
};

exports.login = () => {
    try {
        const result = { data: null, errors: [] };

        return result;
    } catch (error) {}
};
// const register = () => {
//     try {
//         return 'register service';
//     } catch (error) {
//         console.log(error);
//     }
// };

// const authService = {
//     register: register,
// };

// module.exports = authService;
