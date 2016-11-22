module.exports = {
    extends: 'airbnb',

    rules: {
        'arrow-body-style': [0],
        'comma-dangle': [0, {
            arrays: 'always-multiline',
            objects: 'always-multiline',
            imports: 'always-multiline',
            exports: 'always-multiline',
            functions: 'only-multiline',
        }],
        'consistent-return': [2, { treatUndefinedAsUnspecified: false }],
        'import/no-extraneous-dependencies': 0,
        indent: [2, 4],
        'linebreak-style': 0,
        'max-len': [1, 140],
        'no-param-reassign': [2, { props: false }],
        'no-plusplus': [0],
        'no-shadow': [0],
    },
};
