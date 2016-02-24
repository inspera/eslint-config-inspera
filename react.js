'use strict';

module.exports = {
    "extends": "plugin:react/recommended",
    "parserOptions": {
        "ecmaVersion": 6,
            "sourceType": "module",
            "ecmaFeatures": {
                "jsx": true
        }
    },
    "plugins": ["react"],
    "rules": {
        "no-danger": [0]
    }
};
