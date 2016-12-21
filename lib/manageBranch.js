var config = require('config');

function manageBranch(indexFlag) {
	const createBranchFrom = config.get('config.createBranchFrom');
	switch(indexFlag) {
	    case `create`:
	        return `git checkout ${createBranchFrom.branch} && git pull ${createBranchFrom.remote} ${createBranchFrom.branch} && git checkout -b`;
	        break;
	    case `rename`:
	        return `git branch -m `;
	        break;
	    case `delete`:
	        return `git branch -D `;
	        break;
	    default:
	        return `git checkout -b `;
	}
}

module.exports = manageBranch;
