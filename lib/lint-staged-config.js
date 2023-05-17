"use strict";

const fs = require('fs');

/**
 * Change the lint-staged configuration in package.json
 */
module.exports = function() {
  try {
    const packageInfo = fs.readFileSync('package.json', 'utf8');
    const packageJson = packageInfo ? JSON.parse(packageInfo) : {};

    packageJson['lint-staged'] = {
      "*.{js,jsx,ts,tsx}": [
        "eslint --cache --fix",
        "eslint --cache --ext .js,.jsx,.ts,.tsx",
        "tsc --noEmit --jsx react-jsx --allowJs",
        "jest --bail --findRelatedTests"
      ],
      "*.{css,less}": "stylelint --fix"
    };

    fs.writeFileSync('package.json', `${JSON.stringify(packageJson, null, 2)}\n`);
  } catch (error) {
    console.log(error);
  }
  
}