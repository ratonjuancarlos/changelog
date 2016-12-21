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
  console.log(message)
  // console.log(message !== true)
  // console.log(Math.random())
  // console.log(randomCommit)
  // console.log(randomCommit.length)
  // console.log(randomCommit[Math.floor(Math.random() * randomCommit.length-1)])
  console.log(`git commit -m "${currentBranch} -> ${message}"`)
  process.exit(0)
  return `git commit -m "${currentBranch} -> ${message}"`
}

module.exports = commiter;

