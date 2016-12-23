#! /usr/bin/env node

const fse = require('fs-extra');
const exec = require('child_process').exec;
const _ = require('lodash');
const shell = require('shelljs');
// const request = require("request");


const cmd =  require('./lib/gitLog');
const cmdAng =  require('./lib/gitLogAng');
const createJsonFromLog =  require('./lib/createJsonFromLog');
const updateFields =  require('./lib/updateFields');
const commitItem =  require('./lib/commitItem');
const styles =  require('./lib/styles');
// const createJsonFromLog =  require('./lib/createJsonFromLog');

var defaults = require('./config/default');


exports.generateChangeLog = function() {

    let result = {};
    let stream;


    stream = fse.createWriteStream('changelog.html');

    let lastCommit = shell.exec('git log -1 --pretty=format:%H', {silent:true}).stdout

    let gitLogs = shell.exec(cmd, {silent:true}).stdout
    let gitLogsAng = shell.exec(cmdAng, {silent:true}).stdout
// console.log(createJsonFromLog(gitLogsAng))
    result = createJsonFromLog(gitLogs+gitLogsAng);



    stream.write(
    `<!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="Content-Security-Policy" content="style-src \'self\' \'unsafe-inline\'">
            <meta name="lastCommit" content="${lastCommit}">
        </head>
        <body>

            <style>${styles}</style>
            <div hidden id="lastInsert">${lastCommit}</div>
            <h1>Intelligize changelog</h1>`);

    result = updateFields(result);

    let resultByDate = _.groupBy(result, 'date');
	
	for (let dateCommit in resultByDate) {
	    stream.write(`<h2>${dateCommit}</h2>`);

	    if (resultByDate.hasOwnProperty(dateCommit)) {

	        let byBranch = _.groupBy(resultByDate[dateCommit], 'branchType');
	    
	        for (let branchTypeCommit in byBranch) {
	            stream.write(`<h3>${branchTypeCommit}</h3>`);

	            byIssue = _.orderBy(byBranch[branchTypeCommit], ['issueClean'], ['desc']);

    			stream.write('<ul>');
                for (let issue in byIssue) {
                    let commit = byIssue[issue]
	                stream.write( commitItem(commit) );
	            }
    	
    			stream.write(`</ul>`);
	        }
	    }
	}

    stream.write(`
        </body>
    </html>`);
    
    stream.end();

}

this.generateChangeLog();

// module.exports = generateChangeLog;
