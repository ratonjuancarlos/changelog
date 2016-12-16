#! /usr/bin/env node

var inquirer = require('inquirer');
var shell = require('shelljs');
var config = require('config');
var manageBranch = require('./lib/manageBranch');
var promptTypes = require('./lib/promptTypes');

let indexFlag = '--create';

process.argv.forEach(function (val, index, array) {
  if (val == '--create' || val == '--rename' ) {
    indexFlag = val.replace('--', '');
  }
});

inquirer.prompt([
  {
    type: 'list',
    name: 'prefix',
    message: 'Branch Type?',
    choices: config.get('config.prefix'),
    validate: function (answer) {
      if (answer.length < 1) {
        return 'Debe elegir al menos una opcion.';
      }
      return true;
    }
  },
  {
    type: 'list',
    name: 'project',
    message: 'Project?',
    choices: config.get('config.project'),
    validate: function (answer) {
      if (answer.length < 1) {
        return 'Debe elegir al menos una opcion.';
      }
      return true;
    }
  },
  {
    type: 'input',
    name: 'issue',
    message: 'Issue Number?',
    validate: function (answer) {
      var regex =  /^[0-9]*$/;
      if (answer.length < 1) {
        return 'Debe completar el campo con un numero.';
      }
      if (answer.match(regex)) {
        return true;
      }

      return 'Debe ser un numero.';

    }
  },
  {
    type: 'input',
    name: 'description',
    message: 'Description?',
    validate: function (answer) {
      if (answer.length < 1) {
        return 'Debe completar el campo con un numero.';
      }

      return true;
    },
    filter: function (answer) {
       answer = answer.replace(/["']/gi, '');
       answer = answer.replace(/[\s]/gi, '-');
       return answer;
    }
  }
]).then(function (answers) {

  let bootstrapBranch = manageBranch(indexFlag);

  let branchName = `${answers.prefix}/${answers.project}-${answers.issue}-${answers.description}`;

  shell.exec(`${bootstrapBranch}${branchName}`, {silent:true}).stdout
});
