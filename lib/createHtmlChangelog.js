const fse = require('fs-extra');
const _ = require('lodash');
const shell = require('shelljs');

const getJsonFromLog =  require('./getJsonFromLog');
const updateFields =  require('./updateFields');
const commitItem =  require('./commitItem');
const styles =  require('./styles');

function createHtmlChangelog() {
    let result = {};
    let stream;

    stream = fse.createWriteStream('changelog.html');

    let lastCommit = shell.exec('git log -1 --pretty=format:%H', {silent:true}).stdout

    result = getJsonFromLog();

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

module.exports = createHtmlChangelog;
