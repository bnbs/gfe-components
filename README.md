# gfe-components

Component library for GreatFrontEnd projects

## What and Why

A section to explain why some libraries were added to the project so I don't forget in the future.

1. React + Typescript
   </br>
   **@types/react** - type definitions for react.
   </br>
   **react** - a JavaScript library for building user interfaces.
   </br>
   **react-dom** - provides the necessary components and functions to render React applications into the DOM.
   </br>
   **typescript** - add types to functions, variables, etc...
2. Rollup
   </br>
   **@rollup/plugin-commonjs** - convert CommonJS modules to ES6.
   </br>
   **@rollup/plugin-node-resolve** - teaches Rollup how to find external modules.
   </br>
   **@rollup/plugin-terser** - generate a minified bundle with terser (industry-standard minifier for JavaScript code).
   </br>
   **@rollup/plugin-typescript** - integration between Rollup and typescript.
   </br>
   **autoprefixer** - PostCSS plugin to parse CSS and add vendor prefixes to CSS rules.
   </br>
   **postcss** - a tool for transforming styles with JS plugins.
   </br>
   **postcss-loader** - PostCSS loader for webpack (we use webpack in storybook).
   </br>
   **rollup** - a module bundler for JavaScript.
   </br>
   **rollup-plugin-dts** - to bundle up the .d.ts definition files.
   </br>
   **rollup-plugin-peer-deps-external** - to automatically add a library's peerDependencies to the bundle's external config.
   </br>
   **rollup-plugin-postcss** - integration between Rollup and PostCSS.
   </br>
   **ts-lib** - dependency of @rollup/plugin-typescript.
3. Babel
   </br>
   **@babel/core** - to convert modern JavaScript code (ES6 and beyond) and JSX into a backwards-compatible version of JavaScript that can run in older browsers.
   </br>
   **@babel/preset-env** - allows the use of the latest JavaScript without needing to micromanage which syntax transforms (and optionally, browser polyfills) are needed by your target environment(s).
   </br>
   **@babel/preset-react** - set of Babel plugins to add support mainly for transpiling jsx.
   </br>
   **@babel/preset-typescript** - set of Babel plugins to add support for transpiling typescript.
4. Storybook
   </br>
   **@storybook/addon-essentials** - collection of addons for storybook.
   </br>
   **@storybook/addon-styling-webpack** - enable tailwind and css in storybook.
   </br>
   **@storybook/addon-webpack5-compiler-swc** - adds SWC support to Storybook's webpack5 compiler.
   </br>
   **@storybook/blocks** - portable documentation components for building design systems in Storybook.
   </br>
   **@storybook/react** - storybook for React.
   </br>
   **@storybook/react-webpack5** - storybook for React.
   </br>
   **storybook** - combine UI, examples, and components documentation in one place.
5. Jest
   </br>
   **@testing-library/dom** - dependency of @testing-library/react.
   </br>
   **@testing-library/react** - React DOM testing utilities.
   </br>
   **@types/jest** - type definitions for jest.
   </br>
   **jest** - javascript testing.
   </br>
   **jest-environment-jsdom** - to simulate a DOM environment as if we were in the browser.
   </br>
   **ts-node** - to enable writing jest configuration file in typescript.
6. Other libraries
   </br>
   **clsx** - a utility package for constructing className strings conditionally.
   </br>
   **tailwindcss** - a utility-first CSS framework for rapidly building custom user interfaces.
