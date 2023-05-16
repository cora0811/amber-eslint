"use strict";

const fs = require('fs');
const { stylelintConfig } = require('./config');

module.exports = function() {
  try {
    
    fs.writeFileSync('.stylelintrc.json', JSON.stringify(stylelintConfig, null, 2));
    
    console.log('\n\nStyleLint has been configured for your project!\n\n');
   
  } catch (error) {
    console.error(error);
  }
};