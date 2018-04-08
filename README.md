# React Starter

This is another R + Redux starter project using Webpack 3, React Router with Server side rendering and Jest unit testing.


## Features

☑️ Webpack 3\
☑️ React + Redux\
☑️ ESLint️ + Stylelint\
☑️ Hot reloading\
☑️ CSS Modules with Sass Support\
☑️ PostCSS\
☑️ Babel\
☑️ Server side rendering\
☑️ Unit testing with Jest and Enzyme + code coverage (Instanbul)\
☑️ Foundation Grid System\
☑️ ️React Router\
☑️ Component documentation using styleguidist\



## Getting Started

### Install dependencies

`yarn` or `npm install`

### Development Build: starts the development server with hot reloading

`yarn start` or `npm run start`

### Production Build: build production ready app

`yarn build` or `npm run build`

### Production Server: runs production server

`yarn prod` or `npm run prod`

## Linting

### Linting - lints JS (w/ eslint:recommended) and CSS (w/ stylelint-config-standard)
`yarn lint`

### Lint JS only:
`yarn lint-js`

### Lint CSS only:
`yarn lint-css`

## Testing
### Unit testing with Jest
`yarn test`

### Test coverage report
`yarn coverage`


TODO
🗳️ Optimization
🗳️ Cookie notice

🗳️ Progressive Web App stuff
  - offline page - finish, maybe auto-generate html file with https://github.com/jantimon/html-webpack-plugin
🗳️ Add some more useful plugins
  - https://github.com/webpro/release-it
  ️- a11y tools
  - image optimization - https://github.com/Klathmon/imagemin-webpack-plugin
  - additional webpack tools
    - modernizr?
    - https://github.com/webpack-contrib/compression-webpack-plugin
    - https://github.com/webpack-contrib/webpack-bundle-analyzer

🗳️ Automated browser testing

Possibly swap out custom service worker for webpack offline plugin (easier for users to configure) https://github.com/NekR/offline-plugin
Upgrade to Webpack 4 with mini-css-extract-plugin
Get code coverage higher