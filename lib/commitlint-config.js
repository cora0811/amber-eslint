"use strict";

const fs = require('fs');
const { commitlintConfig } = require('./config');

module.exports = function() {
  try {
    
    fs.writeFileSync('commitlint.config.js', commitlintConfig);
    
    console.log('\n\nCommitlint has been configured for your project!\n\n');
   
  } catch (error) {
    console.error(error)
  }
};