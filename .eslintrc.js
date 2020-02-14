module.exports =  {
    parser:  '@typescript-eslint/parser',  // Specifies the ESLint parser
    extends:  [
        'plugin:@typescript-eslint/recommended',  // Uses the recommended rules from the @typescript-eslint/eslint-plugin
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:import/warnings",
        "plugin:import/typescript",
    ],
    plugins: [
        "react"
    ],
    parserOptions:  {
        ecmaVersion:  2018,  // Allows for the parsing of modern ECMAScript features
        sourceType:  'module',  // Allows for the use of imports
    },
    rules:  {
        // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
        // e.g. "@typescript-eslint/explicit-function-return-type": "off",
        "max-len": ["error", { "code": 120 }],
        "quotes": ["error", "double"],
        "@typescript-eslint/interface-name-prefix": "off",
        "@typescript-eslint/no-empty-interface": "off",
        "@typescript-eslint/typedef": ["error", { "arrowParameter": true, }],
    },
    env: {
        browser: true
    },
    "ignorePatterns": [
        "node_modules/"
    ],
};
