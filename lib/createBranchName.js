#! /usr/bin/env node

var inquirer = require('inquirer');
var shell = require('shelljs');
var manageBranch = require('./manageBranch');
var types = require('./promptTypes');
var config = require('config');

function createBranchName() {

    var templateBranchCreate = config.get(`config.templateBranchCreate`);

    var inquirerObject = templateBranchCreate.map(section => {
        if (section.type !== 'separator' && types[section.type] !== undefined) {
            return types[section.type](section.name, section.text, section.mandatory)
        }

    })


    inquirer.prompt([
        types.list('prefix', 'Branch Type', true),
        types.list('project', 'Project', true),
        types.inputNumber('issue', 'Issue Number', true),
        types.inputText('description', 'Description', true, (answer) => answer.replace(/["']/gi, '').replace(/[\s]/gi, '-')),
    ]).then(function(answers) {
        
        var branchName = templateBranchCreate.map(section => {
            if (section.type === 'separator') {
                return config.get(`config[${section.name}]`)
            }

            return answers[section.name];
        }).join('');

        return `${bootstrapBranch}${branchName}`;
    });
}

module.exports = createBranchName;
