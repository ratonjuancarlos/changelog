'use strict';


function createJsonFromLog(gitLogs) {

	gitLogs = gitLogs.replace(/["']/gi, '');
    // gitLogs = gitLogs.replace(/[Merged in |Merge branch | into develop]/gi, '');
    gitLogs = gitLogs.replace(/&#34;/gi, '"');
    
    gitLogs = gitLogs.replace(/(\"\:\s\"\")(\w+)/gi, '": "$2');
    gitLogs = gitLogs.replace(/(\w+)(\"\"\,)/gi, '",');

    gitLogs = gitLogs.substring(0, gitLogs.length - 1);
    gitLogs = '[' + gitLogs + ']';

    gitLogs = JSON.parse(gitLogs)

    return gitLogs;
}

module.exports = createJsonFromLog;