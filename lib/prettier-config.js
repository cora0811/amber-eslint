"use strict";

const fs = require('fs');
const { prettierConfig } = require('./config');

module.exports = function() {
  try {
    
    fs.writeFileSync('.prettierrc', JSON.stringify(prettierConfig, null, 2));
    
    console.log('\n\nPrettier has been configured for your project!\n\n');
   
  } catch (error) {
    console.error(error);
  }
};