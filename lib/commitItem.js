'use strict';

function commitItem(commit) {
    return '<li>' + 
        commit.issueClean + 
        ' - ' +
        commit.subjectClean + 
        ' - ' +
        commit.author_name +
        ' - ' +
        commit.commitLink
}




module.exports = commitItem;
