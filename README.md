# JavaScript style rules

A first suggestion for a shareable ESLint configuration.

To use it in a project:
-----------------------
To use it with a locally installed eslint:
```shell
$ npm install --save git+https://github.com/inspera/eslint-config-inspera.git
```

To use it with a globally installed eslint:
```shell
$ npm install -g git+https://github.com/inspera/eslint-config-inspera.git
```

Create an .eslintrc file if you do not have one already.
Then add the following property to the .eslintrc file:

"extends": "eslint-config-inspera"

Or, if you want to use a global eslint with a local eslint-config-inspera install:

"extends": "./node_modules/eslint-config-inspera/index.js"