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

if (program.create) return createBranchName('create')
if (program.rename) return createBranchName('rename')
if (program.search) return shell.exec(`git branch --list "*${program.search}*"`).stdout
if (program.delete) return shell.exec(`${manageBranch('delete')}${program.delete}`, { silent: true }).stdout
