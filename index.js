module.exports = {
    extends: 'airbnb',

    rules: {
        'arrow-body-style': 'off',
        'class-methods-use-this': 0,
        'consistent-return': ['error', { treatUndefinedAsUnspecified: false }],
        'global-require': 'off',
        'import/no-extraneous-dependencies': 'off',
        'jsx-a11y/no-static-element-interactions': 1,
        'indent': ['error', 4],
        'linebreak-style': 'off',
        'max-len': ['warn', 150],
        'no-param-reassign': ['error', { props: false }],
        'no-plusplus': 'off',
        'no-restricted-syntax': [
            'error',
            'ForInStatement',
            // 'ForOfStatement',
            'LabeledStatement',
            'WithStatement',
        ],
        'no-shadow': 'warn',
        'quote-props': ['error', 'consistent-as-needed'],
    },
};
