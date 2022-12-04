// const dotenv = require('dotenv');
// dotenv.config();

const env = {
    port: process.env.APP_PORT,
    key: process.env.TOKEN_KEY,
    imgStorageClientId: process.env.IMG_STORAGE_CLIENT_ID,
    imgStorageClientSecret: process.env.IMG_STORAGE_CLIENT_SECRET,
    vidStorageClientId: process.env.VID_STORAGE_CLIENT_ID,
    vidStorageClientSecret: process.env.VID_STORAGE_CLIENT_SECRET,
    gifStorageClientId: process.env.GIF_STORAGE_CLIENT_ID,
    gifStorageClientSecret: process.env.GIF_STORAGE_CLIENT_SECRET,
    audStorageClientId: process.env.AUD_STORAGE_CLIENT_ID,
    audStorageClientSecret: process.env.AUD_STORAGE_CLIENT_SECRET,
    redirectUri: process.env.REDIRECT_URI,
};

const initNumber = {
    views: 0,
    comment: 0,
    reference: 0,
    cost: 100,
    point: 5000,
};

const role = {
    guest: '001',
    user: '002',
    moderator: '003',
    admin: '004',
};

const title = {
    guest: 'Anonymous',
    turtleDog: 'Turtle Dog',
    holyGamingChair: 'The HOLY gaming chair',
    threeButtsInOneMouth: 'Three Butts IN One Mouth',
    colorKiller: 'Color Killer',
    theFarmerUnderTheWell: 'The Farmer Under The Well',
    doYouWantToBuildASnowMan: 'Do you want to build a SnowMan',
    baseBricks: 'Base bricks',
    beLoLiNoChill: 'Be Lo Li No Chill',
    imHungry: 'Im Hungry',
    walkingToilet: 'Walking toilet',
    sickAndDump: 'sickAndDump',
};

const field = {
    username: 'username',
    password: 'password',
    email: 'email',
};

const defaultValue = {
    defaultNickname: {
        animals: [
            'nightingale',
            'jellyfish',
            'eel',
            'platypus',
            'zebra',
            'hamster',
            'mole',
            'racoon',
            'crab',
            'octopus',
            'scorpion',
            'deer',
            'koala',
        ],
        colors: [
            'purple',
            'grey',
            'yellow',
            'cyan',
            'brown',
            'silver',
            'green',
            'white',
            'orange',
            'gold',
            'dark',
            'pink',
        ],
    },
    defaultFile: {
        defaultAvatarValue: 'default',
        defaultAvatarUrl: '../assets/images',
    },
    defaultPassword: 'guest123',
    defaultFileType: ['image', 'video', 'gif', 'longText', 'audio'],
};

const status = {
    account: {
        INACTIVE: 0,
        ACTIVE: 1,
        BANNED: 2,
    },
    verse: {
        INACTIVE: 0,
        ACTIVE: 1,
        BANNED: 2,
    },
    deleted: {
        FALSE: 0,
        TRUE: 1,
    },
};

const path = {
    register: '/api/auth/register',
    login: '/api/auth/login',
    refresh: '/api/auth/refresh',
};

const tokenType = {
    access: '0',
    refresh: '1',
};

const checkIsExistedType = {
    true: true,
    false: false,
};

const matchesType = {
    bcrypt: 'bcrypt',
    common: 'common',
};

const regex = {
    username: /^[a-zA-Z0-9_-]{3,16}$/,
    password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
    email: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
};

const httpStatus = {
    //1XX - INFORMATIONAL
    CONTINUE: 100,
    SWITCHING_PROTOCOLS: 101,
    PROCESSING: 102,
    CHECKPOINT: 103,

    // 2XX - SUCCESSFUL
    OK: 200,
    CREATED: 201,
    ACCEPTED: 202,
    NON_AUTHORITATIVE_INFORMATION: 203,
    NO_CONTENT: 204,
    RESET_CONTENT: 205,
    PARTIAL_CONTENT: 206,
    MULTI_STATUS: 207,
    ALREADY_REPORTED: 208,
    IM_USED: 226,

    //3XX - REDIRECTION
    MULTIPLE_CHOICES: 300,
    MOVED_PERMANENTLY: 301,
    FOUND: 302,
    MOVED_TEMPORARILY: 302,
    SEE_OTHER: 303,
    NOT_MODIFIED: 304,
    USE_PROXY: 305,
    TEMPORARY_REDIRECT: 307,
    PERMANENT_REDIRECT: 308,

    //4XX - CLIENT ERROR
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    PAYMENT_REQUIRED: 402,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    METHOD_NOT_ALLOWED: 405,
    NOT_ACCEPTABLE: 406,
    PROXY_AUTHENTICATION_REQUIRED: 407,
    REQUEST_TIMEOUT: 408,
    CONFLICT: 409,
    GONE: 410,
    LENGTH_REQUIRED: 411,
    PRECONDITION_FAILED: 412,
    PAYLOAD_TOO_LARGE: 413,
    REQUEST_ENTITY_TOO_LARGE: 413,
    URI_TOO_LONG: 414,
    REQUEST_URI_TOO_LONG: 414,
    UNSUPPORTED_MEDIA_TYPE: 415,
    REQUESTED_RANGE_NOT_SATISFIABLE: 416,
    EXPECTATION_FAILED: 417,
    I_AM_A_TEAPOT: 418,
    INSUFFICIENT_SPACE_ON_RESOURCE: 419,
    METHOD_FAILURE: 420,
    DESTINATION_LOCKED: 421,
    UNPROCESSABLE_ENTITY: 422,
    LOCKED: 423,
    FAILED_DEPENDENCY: 424,
    TOO_EARLY: 425,
    UPGRADE_REQUIRED: 426,
    PRECONDITION_REQUIRED: 428,
    TOO_MANY_REQUEST: 429,
    REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
    UNAVAILABLE_FOR_LEGAL_REASONS: 451,

    //5XX - SERVER ERROR
    INTERNAL_SERVER_ERROR: 500,
    NOT_IMPLEMENTED: 501,
    BAD_GATEWAY: 502,
    SERVICE_UNAVAILABLE: 503,
    GATEWAY_TIMEOUT: 504,
    HTTP_VERSION_NOT_SUPPORTED: 505,
    VARIANT_ALSO_NEGOTIATES: 506,
    INSUFFICIENT_STORAGE: 507,
    LOOP_DETECTED: 508,
    BANDWIDTH_LIMIT_EXCEEDED: 509,
    NOT_EXTENDED: 510,
    NETWORK_AUTHENTICATION_REQUIRED: 511,
};

module.exports = {
    env,
    role,
    status,
    path,
    regex,
    httpStatus,
    title,
    defaultValue,
    field,
    checkIsExistedType,
    matchesType,
    tokenType,
    initNumber,
};
