function manageBranch(indexFlag) {

	switch(indexFlag) {
	    case `create`:
	        return `git checkout ${config.get('config.environments.name')} && git pull origin ${config.get('config.environments.name')} && git checkout -b `;
	        break;
	    case `rename`:
	        return `git branch -m `;
	        break;
	    default:
	        return `git checkout -b `;
	}

}

module.exports = manageBranch;
