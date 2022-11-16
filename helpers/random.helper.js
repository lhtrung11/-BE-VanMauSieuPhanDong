const { variable } = require('../constants');

const capitalizedFirstLetter = (string) => {
    if (typeof string !== 'string') return '';
    return string.charAt(0).toUpperCase() + string.slice(1);
};

const randomItem = (items) => {
    return items[Math.floor(Math.random() * items.length)];
};

const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
};

const randomNickname = () => {
    const test = `${randomItem(
        variable.defaultNickname.color
    )}${capitalizedFirstLetter(
        randomItem(variable.defaultNickname.animals)
    )}${randomNumber(0, 99999).toString().padStart(5, '0')}`;
    console.log(test);
    return test;
};

const randomUsername = () => {
    return;
};

const randomPassword = () => {
    return;
};

const random = {
    nickname: randomNickname,
    username: randomUsername,
    password: randomPassword,
};

module.exports = random;
