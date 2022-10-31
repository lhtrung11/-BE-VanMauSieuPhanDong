exports.register = async (input, user, order) => {
    try {
        // console.log(`Input: ${input}, User: ${user}`);
        return { input: input, user: user, order: order };
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
