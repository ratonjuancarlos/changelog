#! /usr/bin/env node

var inquirer = require('inquirer');
var shell = require('shelljs');
var config = require('config');
var manageBranch = require('./lib/manageBranch');
var types  = require('./lib/promptTypes');

var indexFlag = '--create';

process.argv.forEach(function (val, index, array) {
  if (!val.indexOf('--') < 0  ) {
    indexFlag = val.replace('--', '');
  }
});

inquirer.prompt([
  types.list('prefix', 'Branch Type', true),
  types.list('project', 'Project', true),
  types.inputNumber('issue', 'Issue Number', true),
  types.inputText('description', 'Description', true, (answer)=>answer.replace(/["']/gi, '').replace(/[\s]/gi, '-')),
]).then(function (answers) {
  var bootstrapBranch = manageBranch(indexFlag);
  var branchName = `${answers.prefix}/${answers.project}-${answers.issue}-${answers.description}`;

  shell.exec(`${bootstrapBranch}${branchName}`, {silent:true}).stdout
});
