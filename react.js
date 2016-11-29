
module.exports = {
    extends: 'plugin:react/recommended',
    plugins: ['react'],
    rules: {
        'react/jsx-filename-extension': 'off',
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/no-danger': 'off',
        'react/no-multi-comp': 'off',
        'react/prefer-es6-class': 'off',
        'react/prefer-stateless-function': 'off',
        'react/sort-comp': ['error', {
            order: [
                'type-annotations',
                'static-methods',
                'lifecycle',
                'everything-else',
                'render',
            ],
        }],
    },
};
