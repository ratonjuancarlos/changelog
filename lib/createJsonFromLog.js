'use strict';


function createJsonFromLog(gitLogs) {

console.log(typeof gitLogs);

	gitLogs = gitLogs.replace(/["']/gi, '"');

    gitLogs = gitLogs.substring(0, gitLogs.length - 1);
    gitLogs = '[' + gitLogs + ']';

    gitLogs = JSON.parse(gitLogs)

    return gitLogs;
}

module.exports = createJsonFromLog;