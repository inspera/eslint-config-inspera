module.exports = {
    extends: 'airbnb',

    rules: {
        'arrow-body-style': [0],
        indent: [2, 4],
        'max-len': [1, 140],
        'func-names': [1],
        'prefer-arrow-callback': [1],
        'quote-props': [1],
        'space-before-function-paren': [1],
        'consistent-return': [2, { treatUndefinedAsUnspecified: false }],
        'import/no-extraneous-dependencies': 0,
    },
};
