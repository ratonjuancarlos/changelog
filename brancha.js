#! /usr/bin/env node

var inquirer = require('inquirer');
var shell = require('shelljs');
var manageBranch = require('./lib/manageBranch');
var types  = require('./lib/promptTypes');

var indexFlag = '--create';

process.argv.forEach(function (val, index, array) {
  if (!val.indexOf('--') < 0  ) {
    indexFlag = val.replace('--', '');
  }
});


// [
//     {"name": "prefix", "type":"list", "mandatory": true, "text":"Prefix"},
//     {"name": "prefixSeparator", "type":"separator"},
//     {"name": "project", "type":"list", "mandatory": true, "text":"Project"},
//     {"name": "commonSeparator", "type":"separator"},
//     {"name": "issue", "type":"inputNumber", "mandatory": true, "text":"Issue Number"},
//     {"name": "commonSeparator", "type":"separator"},
//     {"name": "description", "type":"inputText", "mandatory": true, "text":"Description"}
// ]


var templateBranchCreate = config.get(`config.templateBranchCreate`);

var inquirerObject = templateBranchCreate.map( section => {
  if (section.type !== 'separator' && types[section.type] !== undefined) {
    return types[section.type](section.name, section.text, section.mandatory)
  }

})

console.log(inquirerObject)

inquirer.prompt([
  types.list('prefix', 'Branch Type', true),
  types.list('project', 'Project', true),
  types.inputNumber('issue', 'Issue Number', true),
  types.inputText('description', 'Description', true, (answer)=>answer.replace(/["']/gi, '').replace(/[\s]/gi, '-')),
]).then(function (answers) {
  var bootstrapBranch = manageBranch(indexFlag);
  // var branchName = `${answers.prefix}/${answers.project}-${answers.issue}-${answers.description}`;
  var branchName = templateBranchCreate.map( section => {
    if (section.type === 'separator') {
      return config.get(`config[${section.name}]`)
    }

    return answers[section.name];
  }).join('');

  console.log(branchName)



  shell.exec(`${bootstrapBranch}${branchName}`, {silent:true}).stdout
});
