'use strict';

const _ = require('lodash');
var config = require('config');
var shell = require('shelljs');

const configBranch = config.get('config.branch')

const PROJECT_SEARCH = configBranch.project.map(proj => proj.value).join('|')
const PROJECT_PREFIX = new RegExp(`^(${PROJECT_SEARCH})-(\\d*)`, 'gi');
const BRANCH_PREFIX_SIN = configBranch.prefixSynonymous.join('|')
const BRANCH_SEARCH = configBranch.prefix.map(prfx => prfx.value).join('|')
const BRANCH_PREFIX_ANG = new RegExp(`([${BRANCH_SEARCH}|${BRANCH_PREFIX_SIN}]+)(\\(\\w*\\))(:\\s[\\s\\S(?=:\\s)]+)`, 'i');


const returnLink = (base, url, text) => `<a target="_blank" href="${base}${url}">Ver</a>`


function angularCommit(commit) {

    commit.subjectClean = commit.subject;
    config.get('config.commit.removeFromCommit').forEach(function(remove) {
        commit.subjectClean = commit.subjectClean.replace(remove, "");
    })

    let branchType;

    branchType = commit.subjectClean.match(BRANCH_PREFIX_ANG);

    commit.branchType = "Direct to develop";

    let real_author = shell.exec(`git log --pretty="%P" -n 1 ${commit.commit}`, { silent: true }).stdout.replace("\n", "").split(' ')[1];
    commit.author = shell.exec(`git log --pretty="%aN" ${real_author} -1`, { silent: true }).stdout.trim();

    let issue = commit.subjectClean.match(PROJECT_PREFIX);

    if (issue) {
        commit.subjectClean = commit.subjectClean.replace(issue[0], "").replace("-", "").replace("/", "");
        commit.subjectClean = _.startCase(commit.subjectClean);

        commit.issueClean = returnLink(config.get('config.commit.urlBugs.url'), issue[0], issue[0].toUpperCase());
        commit.issue = issue;
    } else {
        commit.issueClean = "";
        commit.issue = commit.subject;
        commit.author = commit.author_name;
    }

    commit.commitLink = returnLink(config.get('config.commit.urlCommit.url'), commit.commit, commit.abbreviated_commit);

    return commit;
}

module.exports = angularCommit;
