# Simple-Frontend

This is a scaffold for a simple frontend

## Adding es lint to react project

Run this command: ```npm install eslint eslint-plugin-react eslint-plugin-react-hooks --save-dev```

## Must have .eslintrc.json config 

```
{
    "extends": "airbnb",
    "parser": "@babel/eslint-parser",
    "env": {
        "browser": true,
        "es6": true
    },
    "rules": {
        "strict": 0,
        "quotes": [2, "single"],
        "no-else-return": 0,
        "new-cap": ["error", {"capIsNewExceptions": ["Router"]}],
        "no-console": 0,
        "import/no-unresolved": [2, { "caseSensitive": false } ],
        "no-unused-vars": ["error", { "vars": "all", "args": "none" }],
        "no-underscore-dangle": 0,
        "arrow-body-style": 0,
        "one-var": ["error", { "uninitialized": "always", "initialized": "never" }],
        "one-var-declaration-per-line": ["error", "initializations"],
        "max-len": ["error", 200],
        "no-extra-parens": 0,
        "no-restricted-syntax": [
          0,
          "DebuggerStatement"
        ],
        "no-debugger": "warn",
        "react/jsx-uses-react": 2,
        "react/jsx-uses-vars": 2,
        "react/react-in-jsx-scope": 2,
        "react/prop-types": 0,
        "react/destructuring-assignment": 0,
        "react/jsx-first-prop-new-line": 0,
        "react/jsx-filename-extension": 0,
        "jsx-a11y/click-events-have-key-events": 0,
        "jsx-a11y/no-noninteractive-element-interactions": 0,
        "react/jsx-one-expression-per-line":0
    },
    "plugins": [
        "react"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true,
            "sourceType": "module"
        }
    }
}
```