#! /usr/bin/env node

const shell = require('shelljs');

const manageBranch = require('./lib/brancha/manageBranch');
const createBranchName = require('./lib/brancha/createBranchName');
const commiter = require('./lib/brancha/commiter');
const config = require('config');
const pjson = require('./package.json');
const program = require('commander');
const chalk = require('chalk');

program
    .version(pjson.version)
    .usage('[options] <string>')
    .option('-c, --create', `Create a new branch from ${config.get('config.brancha.createBranchFrom.remote')}/${config.get('config.brancha.createBranchFrom.branch')}`)
    .option('-r, --rename', 'Rename current branch')
    .option('-d, --delete <string>', `${chalk.red('Delete')} branch <string>`)
    .option('-s, --search <string>', 'Search <string> in local branches names')
    .option('-f, --search-message <string>', 'Search <string> in current branch commits')
    .option('-b, --branches', 'Show local branches')
    .option('-D, --delete-bulk <pattern>', `Bulk ${chalk.red('delete')} branches with pattern`)
    .option('-z, --create-commit [message]', `Create commit with [message] or create commit with ${chalk.white.bgMagenta.bold('RANDOM')} message`)
    .parse(process.argv);

if (program.create) {
  createBranchName('create');
}

if (program.rename) {
  createBranchName('rename');
}

if (program.search) {
  shell.exec(`git branch | grep -i "${program.search}"`).stdout;
}

if (program.searchMessage) {
  shell.exec(`git log --oneline --grep="${program.searchMessage}"`).stdout;
}

if (program.branches) {
  shell.exec('git branch');
}

if (program.delete) {
  shell.exec(`${manageBranch('delete')} ${program.delete}`, { silent: true }).stdout;
}

if (program.deleteBulk) {
  shell.exec(`${manageBranch('deleteBulk')[0]} ${program.deleteBulk} ${manageBranch('deleteBulk')[1]}`, { silent: true }).stdout;
}

if (program.createCommit) {
  shell.exec(`${commiter(program.createCommit)}`, { silent: true }).stdout;
}
