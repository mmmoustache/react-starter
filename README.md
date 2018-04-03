FEATURES

☑️ Webpack 4
☑️ React
☑️ ESLint
☑️ Stylelint
☑️ Hot reloading
  - this should only be in development
☑️ CSS Modules with Sass Support
☑️ PostCSS
☑️ Babel
☑️ Isomorphic rendering
  - this should only be in production to allow for hot reloading?
☑️ Server rendered css
  - Ended up using extracttextplugin as webpack 4 + mini-css-extract-plugin not ready yet

☑️ Redux
☑️ Jest testing
☑️ Grid System
☑️ ️ Dynamic Routing

🗳️ Progressive Web App stuff
  - service worker
  - offline page
  - meta stuff
🗳️ Docker support
🗳️ Developer workflow stuff (yarn start, prod etc..) 
🗳️ Optimization - add gzipping? 
🗳️ Open graph stuff?


ISSUES

🗳️ Prod server not working properly
  - need to serve css/js files in prod
  - server.js is throwing error due to module.exports not being support
    - do we need separate client/server bundles?
  - need to get my head around development.js and production.js
    - they should both server exactly the same files (+ have same functionality), just one has the hot reload stuff
    - production bundle should be minified etc..

