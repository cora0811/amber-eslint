"use strict";

const fs = require('fs');
const { eslintConfig } = require('./config');

/**
 * Generate eslintrc configuration file
 */
module.exports = function() {
  try {
    
    fs.writeFileSync('.eslintrc', JSON.stringify(eslintConfig, null, 2));
    
    console.log('\n\nESLint has been configured for your project!\n\n');
   
  } catch (error) {
    console.error(error);
  }
};