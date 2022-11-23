// const User = require('../models/user.model');
const jwt = require('jsonwebtoken');
const Account = require('../models/account.model');
const AccountIndex = require('../models/accountIndex.model');
const AccountHistory = require('../models/accountHistory.model');
const authService = require('../services/auth.service');
const basicService = require('../services/basic.service');
const { variable, message } = require('../constants');
const response = require('../helpers/responseHandler.helper');

exports.register = async (req, res, next) => {
    const output = await basicService.create(
        Account,
        {
            ...req.input,
            nickname: req.input.username,
            role: variable.role.user,
            title: variable.title.beLoLiNoChill,
        },
        AccountIndex
    );

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
    const output = await authService.login(AccountHistory, req.input);
    response(
        variable.httpStatus.OK,
        variable.httpStatus.UNAUTHORIZED,
        message.LOGIN_SUCCESS,
        message.LOGIN_FAILED,
        output,
        res
    );
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
