/* eslint-disable */
module.exports = {
    required: {
        rule: 'required',
        message: 'this field is required',
    },
    positive: {
        rule: 'minNumber:0',
        message: 'this field must contain a positive number',
    },
    float: {
        rule: 'isFloat',
        message: 'this field must contain a number',
    },
    maxDecimals2: {
        rule: 'matchRegexp:^[0-9]*\.[0-9]{0,2}$',
        message: 'this field must contain a number with up to 2 decimal spaces',
    },
    url: {
        rule: 'matchRegexp:(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})',
        message: 'this field must contain a valid url',
    },
    lengthMax255: {
        rule: 'maxStringLength:255',
        message: 'this field must contain under 255 characters',
    },
    lengthMax50: {
        rule: 'maxStringLength:50',
        message: 'this field must contain under 50 characters',
    },
};