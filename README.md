# Webpack 5

- **Webpack** A module bundler. But for webpack module is a broad view - CommonJS module, AMD modules, CSS imports, images url, ES modules.
- Ultimate goal of webpack is unify all different sources and modules in a way to import them in javascript code and finally produce a shippable output.

# Things to remember
- **Input Point** A point from where all dependencies of project are collected. From version 4, default is ` src/index.js` but configurable. Can have multiple entry points.
- **Output** A location where resulting javascript files and static files are collected during build process. The resulting filese are part of bundles. From webpack 4, the default output folder is `dist/`
- **Loaders**
- **Plugins**
- **Mode** Development and production. Main difference is minifiction and optimization. 
- **Code Splitting** /lazy loading is used to avoid larger bundles. Developer can decide which block to load when user changes routes or clicks or other events. A splitted code is also called `chunk`.


# Codebase

## webpack-earth valentinog.com 
- Dev Dependencies
    - webpack
    - webpack-cli
    - webpack-dev-server (local server for dev purposes)
    - html-webpack-plugin (`plugin` loads HTML file and inject the bundles in the same file.)
    - style-loader (loading stylesheet in the DOM, inject in DOM) 
    - css-loader (loading CSS file with import)
    - sass-loader (loading SASS file with import)
    - sass (SKIP)
    - babel (modern JavaScript compilation, webpack can work without it but for ES5 conversion, these required!)
    - babel/core (the actual engine)
    - babel/preset/env (modern JS to ES5)
    - @babel/preset-react (for React JS conversions)
    - babel loader (for webpack)
- Code Splitting
    - Avoid big bundles, avoid dependency duplications!
    - Webpack community decided 200KB as maximum size of initial bundle.
    - The cost of JavaScript [https://v8.dev/blog/cost-of-javascript-2019]
    - Three ways to code split
        - **multiple entry points** 
        - **optimization.splitChunks** suppose you are using a library like moment js, `npm i moment` then use it in `index.js` like `import moment from "moment";`, now your bundle size will grow exponentially, the whole library will be bundles into the main entry point of the app. `main.js 250KiB`. With optimization.splitChunks, you can move tout the library from the main bundle. Just add
        ```javascript
            optimization: {
                splitChunks: { chunks: "all" }
            },
        ```
        But dont go for moment, use luxon or date-fns which are better alternatives.
        - **dynamic imports** 

