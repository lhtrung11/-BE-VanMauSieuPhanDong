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
        message.REGISTER_SUCCESS,
        message.REGISTER_FAILED,
        output,
        res
    );
};

exports.login = async (req, res, next) => {
    req.input = { ...req.private, ...req.input };
    const output = await authService.login(AccountHistory, req.input);
    response(
        variable.httpStatus.OK,
        variable.httpStatus.UNAUTHORIZED,
        message.SIGNIN_SUCCESS,
        message.SIGNIN_FAILED,
        output,
        res
    );
};

exports.logout = async (req, res, next) => {
    const output = await authService.logout(AccountHistory, req.input);
    response(
        variable.httpStatus.OK,
        variable.httpStatus.NOT_FOUND,
        message.LOGOUT_SUCCESS,
        message.LOGOUT_FAILED,
        output,
        res
    );
};
