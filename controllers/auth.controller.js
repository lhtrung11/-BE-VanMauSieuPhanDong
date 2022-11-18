// const User = require('../models/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Account = require('../models/account.model');
const AccountIndex = require('../models/accountIndex.model');
const authService = require('../services/auth.service');
const basicService = require('../services/basic.service');
const random = require('../helpers/random.helper');
const { variable, message } = require('../constants');
const response = require('../helpers/responseHandler.helper');

exports.register = async (req, res, next) => {
    const output = await basicService.create(Account, {
        ...req.input,
        nickname: req.input.username,
        role: variable.role.user,
        title: variable.title.beLoLiNoChill,
    });
    if (!output.errors)
        async (result) => {
            const outputIndex = await basicService.create(AccountIndex, {
                accountId: result._id,
            });
            console.log(outputIndex);
        };

    response(
        variable.httpStatus.CREATED,
        variable.httpStatus.CONFLICT,
        message.CREATE_SUCCESS,
        message.CREATE_FAIL,
        output,
        res
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
