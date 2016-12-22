//Defaults options
var branch = require('./branch');
var commit = require('./commit');
var file = require('./file');
var log = require('./log');
var logOptions = require('./logOptions');
var production = require('./production');
var randomCommit = require('./randomCommit');



module.exports = {
    app_name: 'Git Changelog',
    intro: 'Git changelog is a utility tool for generating branches and creating changelogs. It is free and opensource. And based on https://github.com/rafinskipg/git-changelog :)',
    branch: '',
    repo_url: '',
    version: 'v1.0.0',
    config: {
        branch: branch,
        commit: commit,
        file: file,
        log: log,
        logOptions: logOptions,
        production: production,
        randomCommit: randomCommit,
    }
}
