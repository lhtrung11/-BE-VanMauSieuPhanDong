// const dotenv = require('dotenv');
// dotenv.config();

const env = {
    port: process.env.APP_PORT,
};

const role = {
    guest: '001',
    user: '002',
    moderator: '003',
    admin: '004',
};

const section = {
    config: 0,
    constant: 1,
    controller: 2,
    helper: 3,
    middleware: 4,
    model: 5,
    router: 6,
    service: 7,
    entrance: 8,
};

const path = {
    register: '/api/auth/register',
    login: '/api/auth/login',
    refresh: '/api/auth/refresh',
};

const regex = {
    username: /^[a-zA-Z0-9_-]{3,16}$/,
    password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
    email: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
};

module.exports = { env, role, section, path, regex };
