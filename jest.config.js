module.exports = {
  "moduleNameMapper": {
    "\\.(css|scss)$": "<rootDir>/tools/styleMock.js"
  },
  "collectCoverageFrom": [
    'src/actions/**/*.{js,jsx}',
    'src/components/**/*.{js,jsx}',
    'src/containers/**/*.{js,jsx}',
    'src/reducers/**/*.{js,jsx}',
    '!**/node_modules/**',
  ],
  "coverageDirectory": '<rootDir>/coverage',
  "verbose": true,
};
