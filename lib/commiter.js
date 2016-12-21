var config = require('config');
var shell = require('shelljs');


function commiter(message) {
  message !== true ? message : randomCommit[Math.floor(Math.random() * 4)];
  process.exit(0)
  const currentBranch = shell.exec('git rev-parse --abbrev-ref HEAD', { silent: true }).stdout.replace('\n', '')
  return `git commit -m "${currentBranch} -> ${message}"`
}

module.exports = commiter;

