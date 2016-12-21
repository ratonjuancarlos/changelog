var config = require('config');
var shell = require('shelljs');


function commiter(message) {
  const randomCommit = [
    'tu vieja en brancha',
    'yaastinnnnnnnn',
    'wiiiiiipu',
    'jamaaaas'
  ]
  
  message = message === true ? randomCommit[Math.floor(Math.random() * randomCommit.length-1)] : message ;
  const currentBranch = shell.exec('git rev-parse --abbrev-ref HEAD', { silent: true }).stdout.replace('\n', '')
  return `git commit -m "${currentBranch} -> ${message}"`
}

module.exports = commiter;

