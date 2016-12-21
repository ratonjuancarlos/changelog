'use strict';

function commitItem(commit) {
    return '<li>' + 
        commit.issueClean + 
        ' - ' +
        commit.subjectClean + 
        ' - ' +
        commit.real_author +
        ' - ' +
        commit.author_name +
        ' - ' +
        commit.commitLink
}




module.exports = commitItem;
