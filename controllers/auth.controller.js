// const User = require('../models/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Account = require('../models/account.model');
const authService = require('../services/auth.service');
const basicService = require('../services/basic.service');
const random = require('../helpers/random.helper');
const { variable, message } = require('../constants');

exports.register = async (req, res, next) => {
    const output = await basicService.create(Account, req.input);
    res.status(variable.httpStatus[output.catch ? 'CONFLICT' : 'CREATED']).json(
        {
            description:
                message[output.catch ? 'CREATE_FAIL' : 'CREATE_SUCCESS'],
            [output.catch ? 'errors' : 'data']: output.catch
                ? output.catch
                : output,
        }
    );
};

exports.login = async (req, res, next) => {
    try {
        const user = await User.findOne({ username: req.body.username });

        if (!user) {
            res.status(400).json({
                status: 'error',
                message: 'username is not existed',
            });
        }
        if (bcrypt.compareSync(req.body.password, user.password)) {
            const token = jwt.sign(
                { userId: user._id, role: user.role },
                process.env.APP_SECRET,
                { expiresIn: '2h' }
            );
            res.status(200).json({
                status: 'success',
                data: {
                    token,
                    name: user.name,
                },
            });
        } else {
            res.status(400).json({
                status: 'error',
                message: 'incorrect password',
            });
        }
    } catch (error) {
        res.json(error);
    }
};

exports.logout = async (req, res, next) => {
    const token = jwt.sign({ message: '' }, process.env.APP_SECRET, {
        expiresIn: '1ms',
    });
    res.status(200).json({
        status: 'success',
        message: 'Logout successfully',
        data: { token },
    });
};
