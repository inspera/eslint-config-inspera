
module.exports = {
    extends: 'plugin:react/recommended',
    plugins: ['react'],
    rules: {
        'react/forbid-prop-types': 'off',
        'react/jsx-filename-extension': 'off',
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/jsx-no-bind': ['error', {
            ignoreRefs: true,
            allowArrowFunctions: false,
            allowBind: false,
        }],
        'react/jsx-no-undef': ['error', { allowGlobals: true }],
        'react/no-danger': 'off',
        'react/no-multi-comp': 'off',
        'react/prefer-stateless-function': 'off',
        'react/require-default-props': 'off',
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
