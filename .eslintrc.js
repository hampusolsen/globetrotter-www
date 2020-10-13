module.exports = {
    parser: "@typescript-eslint/parser",
    extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "prettier/@typescript-eslint",
        "plugin:prettier/recommended",
    ],
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
        },
    },
    rules: {
        "linebreak-style": ["error", "unix"],
        "react/jsx-props-no-spreading": "off",
        "react/prop-types": "off",
    },
    settings: {
        react: {
            version: "16.13.1",
        },
    },
};
