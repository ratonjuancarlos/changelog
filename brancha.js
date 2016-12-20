#! /usr/bin/env node

var inquirer = require('inquirer');
var shell = require('shelljs');
var manageBranch = require('./lib/manageBranch');
var createBranchName = require('./lib/createBranchName');
var types = require('./lib/promptTypes');
var config = require('config');
var pjson = require('./package.json');
var program = require('commander');

var chalk = require('chalk');
 


program
    .version(pjson.version)
    .usage('[options] <string>')
    .option('-c, --create', `Create a new branch from ${config.get('config.createBranchFrom.remote')}/${config.get('config.createBranchFrom.branch')}`)
    .option('-r, --rename', 'Rename current branch')
    .option('-d, --delete <string>', 'Delete branch <string>')
    .option('-s, --search [string]', 'Show local branches or search [string] in local branches', '')
    .parse(process.argv);


console.log(program)


if (program.create) return shell.exec(`${manageBranch('create')}${createBranchName()}`, { silent: true }).stdout
if (program.rename) return shell.exec(`${manageBranch('rename')}${createBranchName()}`, { silent: true }).stdout

switch(program.search) {
    case '':
      shell.exec(`git branch`).stdout
      break;
    case undefined:
      console.error('no command given!');
      process.exit(1);
    default:
      shell.exec(`git branch | grep ${program.search}`).stdout
}

switch(program.delete) {
    case undefined:
      console.error('no target branch to delete!');
      process.exit(1);
    default:
      shell.exec(`${manageBranch('delete')}${program.delete}`, { silent: true }).stdout
}


