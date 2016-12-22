'use strict';

function commitItem(commit) {
    return `<li  class="commit-issue">${commit.issue} - ${commit.issueClean}
	    <ul>
		    <li class="commit-description">${commit.subjectClean}</li>
		    <li>${commit.author}</li>
		    <li class="commit-sha">${commit.abbreviated_commit} - ${commit.commitLink}</li>
	    </ul>
    </li>`
}

module.exports = commitItem;
