#! /usr/bin/env node

var inquirer = require('inquirer');
var shell = require('shelljs');
var manageBranch = require('./manageBranch');
var types = require('./promptTypes');
var config = require('config');

function createBranchName(action) {
    const templateBranchCreate = config.get(`config.file.templateBranchCreate`);

    const inputs = templateBranchCreate
        .filter(section => section.type !== 'separator')
        .map(section =>
            types[section.type](section.name, section.text, section.mandatory)
        )

    inquirer
      .prompt(inputs)
      .then( answers => {
        const branchName= templateBranchCreate.map(section => 
          section.type === 'separator' ? config.get(`config.file.${section.name}`) : answers[section.name]
        ).join('')
        shell.exec(`${manageBranch(action)} ${branchName}`, { silent: true }).stdout
      });

}

module.exports = createBranchName;
