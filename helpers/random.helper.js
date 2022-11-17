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
    return `${randomItem(
        variable.defaultValue.defaultNickname.colors
    )}${capitalizedFirstLetter(
        randomItem(variable.defaultValue.defaultNickname.animals)
    )}${randomNumber(0, 99999).toString().padStart(5, '0')}`;
};

const randomUsername = () => {
    const min = 0;
    const max = 9999999999; // 15 so
    return `guest${randomNumber(min, max)
        .toString()
        .padStart(max.toString().length, '0')}`;
};

const randomPassword = () => {
    return;
};

const random = {
    nickname: randomNickname,
    username: randomUsername,
    // password: randomPassword,
};

module.exports = random;
