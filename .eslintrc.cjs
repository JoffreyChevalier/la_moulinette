module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "import"],
  rules: {
    "no-console": "off",
    "react/prop-types": "off",
    "react/no-array-index-key": "off",
    "no-restricted-syntax": [
      "error",
      {
        selector:
          "CallExpression[callee.object.name='console'][callee.property.name!=/^(error|warn)$/]",
        message:
          "You can only call the error() and warn() functions from the console object",
      },
    ],
    "react/jsx-props-no-spreading": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-one-expression-per-line": "off",
    "react/no-unescaped-entities": "off",
    "jsx-a11y/label-has-associated-control": [
      "error",
      {
        assert: "either",
      },
    ],
  },
  settings: {
    "import/resolver": {
      "eslint-import-resolver-custom-alias": {
        alias: {
          "@assets": "./src/assets",
          "@components": "./src/components",
          "@contexts": "./src/contexts",
          "@pages": "./src/pages",
          "@services": "./src/services",
        },
        extensions: [".js", ".jsx"],
      },
    },
  },
};
