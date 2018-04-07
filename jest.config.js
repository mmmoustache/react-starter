module.exports = {
  "moduleNameMapper": {
    "\\.(css|scss)$": "<rootDir>/tools/styleMock.js",
    "\\.(svg)$": "<rootDir>/tools/svgMock.js",
  },
  "collectCoverageFrom": [
    'src/actions/**/*.{js,jsx}',
    'src/components/**/*.{js,jsx}',
    'src/containers/**/*.{js,jsx}',
    'src/reducers/**/*.{js,jsx}',
    '!**/node_modules/**',
    '!src/reducers/index.js',
    '!src/components/App/*.{js,jsx}',
  ],
  "coverageDirectory": '<rootDir>/coverage',
  "verbose": true,
};
