'use strict';

const _ = require('lodash');
var config = require('config');
var shell = require('shelljs');

const returnLink = (base, url, text) => `<a target="_blank" href="${base}${url}">Ver</a>`

function angularCommit(commit) {

    commit.subjectClean = commit.subject;
    config.get('config.commit.removeFromCommit').forEach(function(remove) {
        commit.subjectClean = commit.subjectClean.replace(remove, "");
    })

    commit.branchType = "Direct to develop";

    const parentCommits = shell.exec(`git log --pretty="%P" -n 1 ${commit.commit}`, { silent: true }).stdout.replace("\n", "").split(' ')
    commit.author = shell.exec(`git log --pretty="%aN" ${parentCommits[0]} -1`, { silent: true }).stdout.trim();


    if (parentCommits.length > 1) {
        commit.author = shell.exec(`git log --pretty="%aN" ${parentCommits[1]} -1`, { silent: true }).stdout.trim();
    }

    commit.issueClean = "";
    commit.issue = commit.subject;

    commit.commitLink = returnLink(config.get('config.commit.urlCommit.url'), commit.commit, commit.abbreviated_commit);

    return commit;
}

module.exports = angularCommit;
