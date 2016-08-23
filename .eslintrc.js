module.exports = {
    extends: ['./index.js', './react.js'],

    // I want to use babel-eslint for parsing!
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    env: {
        // I write for browser
        browser: true,
        // in CommonJS
        node: true,
        mocha: true
    },
    global: {
        Promise: true
    },
    rules: {
        'global-require': [0],
        'max-len': [1],
        'no-param-reassign': [2, {props: false}],
        'no-shadow': [1],
        'func-names': [1],
        'quote-props': [1],
        'react/jsx-filename-extension': [0],
    }
};
