"use strict";

const fs = require('fs');

/**
 * Generate .husky configuration file
 */
module.exports = function() {
  const { exec } = require('child_process');

  exec('npx husky install', (err, stdout, stderr) => {
    if(err) {
      console.error(err);
      return;
    }

    const preContent = `#!/bin/sh\n. "$(dirname "$0")/_/husky.sh"\n\nnpx lint-staged\n`;
    const commitContent = `#!/usr/bin/env sh\n. "$(dirname -- "$0")/_/husky.sh"\n\nyarn commitlint --edit $1\n`;

    fs.writeFile('.husky/pre-commit', preContent, (err) => {
      if(err) {
        console.error(err);
        return;
      }
    })

    fs.writeFile('.husky/commit-msg', commitContent, (err) => {
      if(err) {
        console.error(err);
        return;
      }
    })

    exec('chmod +x .husky/pre-commit', (err, stdout, stderr) => {
      if(err) {
        console.error(err);
        return;
      }
    })

    exec('chmod +x .husky/commit-msg', (err, stdout, stderr) => {
      if(err) {
        console.error(err);
        return;
      }
    })
    
  })
}