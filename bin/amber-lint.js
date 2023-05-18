#!/usr/bin/env node

const { eslint, prettier, stylelint, commitlint, ts, editor } = require('../lib/api')
const generateHusky = require('../lib/generate-husky')
const lintStaged = require('../lib/lint-staged-config')

/**
 * Catch and report unexpected error.
 * @param {any} error The thrown error object.
 * @returns {void}
 */
function onFatalError(error) {
  process.exitCode = 2;

  const { version } = require("../package.json");

  console.error(`
    Oops! Something went wrong! :(

    AelfLint: ${version}

    ${error}`);
}

(async function main() {
  try {
    console.log('\n\nInstalling plugins...\n\n');

    const { exec } = require('child_process');


    // const unPlugins = 'npm uninstall eslint eslint-config-prettier eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks husky lint-staged prettier stylelint stylelint-config-prettier stylelint-config-standard eslint-plugin-no-inline-styles @commitlint/cli @commitlint/config-conventional';
    const plugins = 'yarn add eslint@^8.23.1 eslint-config-prettier@^6.11.0 eslint-plugin-prettier@^4.2.1 eslint-plugin-react@^7.31.8 eslint-plugin-react-hooks@^4.2.0 husky@^8.0.1 lint-staged@13.2.2 prettier@^2.2.1 stylelint@^14.9.1 stylelint-config-prettier@^9.0.3 stylelint-config-standard@^26.0.0 eslint-plugin-no-inline-styles@^1.0.5 @commitlint/cli@^17.0.2 @commitlint/config-conventional@^17.0.2';

    // Install the lint plugins
    exec(plugins, (err, stdout, stderr) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log('\n\nPlugins has been installed for your project!\n\n');

      // Generate Configuration File
      eslint()
      prettier()
      stylelint()
      commitlint()
      ts()
      editor()
      generateHusky()
      lintStaged()
    });
  } catch (error) {
    console.error(error);
  }
}()).catch(onFatalError);