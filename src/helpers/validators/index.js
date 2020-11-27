const validator = require('validator');

const validators = {
    // eslint-disable-next-line no-unused-vars
    ifStrCondition: async (str, value, regExp) =>
        !validator.isLength(str, value.min, value.max) || validator.matches(str, regExp) // regExp не работает
};

module.exports = { validators };
