const shell = require('shelljs');

const cmd =  require('./gitLog');
const cmdAng =  require('./gitLogAng');
const createJsonFromLog =  require('./createJsonFromLog');

function getJsonFromLog() {
    let gitLogs = shell.exec(cmd, {silent:true}).stdout
    let gitLogsAng = shell.exec(cmdAng, {silent:true}).stdout
    return createJsonFromLog(gitLogs+gitLogsAng);
}

module.exports = getJsonFromLog;
