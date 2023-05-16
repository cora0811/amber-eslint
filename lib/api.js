"use strict";

const eslint = require('./eslin-config');
const prettier = require('./prettier-config');
const stylelint = require('./stylelint-config');
const editor = require('./editor-config');
const commitlint = require('./commitlint-config');
const ts = require('./ts-config')

module.exports = {
  eslint,
  prettier,
  stylelint,
  editor,
  commitlint,
  ts
};