'use strict';

function commitItem(commit) {
    return '<li>' + 
        commit.issueClean + 
        ' - ' +
        commit.subjectClean + 
        ' - ' +
        commit.author +
        ' - ' +
        commit.commitLink
}

module.exports = commitItem;
