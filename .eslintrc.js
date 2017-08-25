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
    globals: {
        Promise: true
    },
};
