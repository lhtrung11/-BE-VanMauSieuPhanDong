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
};

const regex = {
    username: '/^[a-zA-Z0-9_-]{3,16}$/',
    password: '',
};

module.exports = { env, role, section, path, regex };
