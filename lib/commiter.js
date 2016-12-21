var config = require('config');
var shell = require('shelljs');


function commiter(message) {
  const randomCommit = [
    'tu vieja en brancha',
    'yaastinnnnnnnn',
    'wiiiiiipu',
    'jamaaaas'
  ]
  message !== true ? message : randomCommit[Math.floor(Math.random() * 4)];
  const currentBranch = shell.exec('git rev-parse --abbrev-ref HEAD', { silent: true }).stdout.replace('\n', '')
  return `git commit -m "${currentBranch} -> ${message}"`
}

module.exports = commiter;

