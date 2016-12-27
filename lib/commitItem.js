'use strict';

function commitItem(commit) {
    return `<li>
    	<span class="commit-issue">${commit.issue}</span> ${commit.issueClean}
	    <ul>
		    <li class="commit-description">${commit.subjectClean}</li>
		    <li>${commit.author}</li>
		    <li class="commit-sha">${commit.abbreviated_commit} - ${commit.commitLink}</li>
	    </ul>
    </li>`
}

module.exports = commitItem;
