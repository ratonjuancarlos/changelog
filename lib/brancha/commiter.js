var config = require('config');
var shell = require('shelljs');


function commiter(message) {
  const randomCommit = config.get(`config.randomCommit`);
  message = typeof message === 'boolean' ? randomCommit[Math.floor(Math.random() * randomCommit.length)] : message ;
  const currentBranch = shell.exec('git rev-parse --abbrev-ref HEAD', { silent: true }).stdout.replace('\n', '')
  console.log(message)
  return `git commit -m "${currentBranch} -> ${message}"`
}

module.exports = commiter;

