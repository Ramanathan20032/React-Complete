# Setting up Testing in App

- install React testing Library
  --> npm i -d @testing-library/react
- React testing Library uses Jest
  --> npm i -d jest
- jest uses along with babel[Babel Dependencies], with that need to add corresponding Dependencies
  --> npm i -d @babel/core @babel/preset-env bable/jest

# Configure Babel to target your current version of Node by creating a babel.config.js file in the root of your project:

- babel.config.js
  module.exports = {
  presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
  };

# configure paarcel config file to disable default babel transpilation

--> to use it with jest configured babel

- {
  "extends": "@parcel/config-default",
  "transformers": {
  "\*.{js,mjs,jsx,cjs,ts,tsx}": [
  "@parcel/transformer-js",
  "@parcel/transformer-react-refresh-wrap"
  ]
  }
  }

# Jest Configuration

-- npx create-jest
-- install jsdom library [Testing Environment] if(version > 28)

# to enable jsx inside the testing component

-- npm i @babel/preset/react
-- include @babel/preset/react inside babel config
["@babel/preset-react", { runtime : "automatic" }]
// babel preset is helping that react code to converted into normal html

# install @testing-library/jest-dom

-- npm i @testing-library/jest-dom
