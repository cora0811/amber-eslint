"use strict";

const fs = require('fs');

module.exports = function() {
  try {
    const packageInfo = fs.readFileSync('package.json', 'utf8');
    const packageJson = packageInfo ? JSON.parse(packageInfo) : {};

    packageJson['lint-staged'] = {
      "*.{js,jsx,ts,tsx}": [
        "eslint --cache --fix",
        "tsc --noEmit --jsx react-jsx",
        "jest --bail --findRelatedTests"
      ],
      "*.{css,less}": "stylelint --fix"
    };

    fs.writeFileSync('package.json', `${JSON.stringify(packageJson, null, 2)}\n`);
  } catch (error) {
    console.log(error);
  }
  
}