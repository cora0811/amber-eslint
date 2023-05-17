"use strict";

const fs = require('fs');
const { editorConfig } = require('./config');

/**
 * Generate editorconfig configuration file
 */
module.exports = function() {
  try {
    
    fs.writeFileSync('.editorconfig', editorConfig);
    
    console.log('\n\nEditorConfig has been configured for your project!\n\n');
   
  } catch (error) {
    console.error(error);
  }
};