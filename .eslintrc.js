module.exports = {
  "parser": "babel-eslint",
  "plugins": [
    "react",
    "jest"
  ],
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "es6": true,
    "browser": true,
    "node": true,
    "mocha": true,
    "jest/globals": true,
  },   
  "extends": [
    "eslint:recommended", 
    "plugin:react/recommended"
  ],    
  "rules": {
    "no-unreachable": 0, // Needed for Redux Reducers
    "no-console": [ // Allowed in development
      "error",
      {
        "allow": ["warn", "error", "info"]
      }
    ],
  }
};
