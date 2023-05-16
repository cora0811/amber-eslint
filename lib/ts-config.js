"use strict";

const fs = require('fs');
const { tsConfig } = require('./config');

module.exports = function() {
  try {
    
    fs.writeFileSync('aelftsconfig.json', JSON.stringify(tsConfig, null, 2));
    
    console.log('\n\nTSConfig has been configured for your project!\n\n');
   
  } catch (error) {
    console.error(error);
  }
};