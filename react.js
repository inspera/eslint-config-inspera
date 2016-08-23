
module.exports = {
    extends: 'plugin:react/recommended',
    plugins: ['react'],
    rules: {
        'react/no-danger': 0,
        'react/no-multi-comp': 0,
        'react/prefer-es6-class': [0],
        'react/prefer-stateless-function': 0,
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        'react/sort-comp': [2, {
            order: [
                'type-annotations',
                'static-methods',
                'lifecycle',
                'everything-else',
                'render',
            ],
        }],
        'react/jsx-filename-extension': [0],
    },
};
