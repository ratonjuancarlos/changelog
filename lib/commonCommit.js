'use strict';

const _ = require('lodash');
var config = require('config');
var shell = require('shelljs');

const configBranch = config.get('config.branch')

const projectSearch = configBranch.project.map(proj => proj.value).join('|')
const projectPrefix = new RegExp(`^(${projectSearch})-(\\d*)`, 'gi');

const branchPrefixSin = configBranch.prefixSynonymous.join('|')

const branchSearch = configBranch.prefix.map(prfx => prfx.value).join('|')
const branchPrefix = new RegExp(`^(${branchSearch}|${projectSearch}|${branchPrefixSin}|\\d+)(-|\\u005c|\\u002F)+`, 'gi');

// const branchPrefixAng = new RegExp(`^(ci)(\\(\\))(: cz conventional changelog)`, 'gi');

// 'ci(): cz conventional changelog'.match(/[fix|feature|ci|enhancement|feat|docs|BREAKING|refactor|style|test|chore|Merge branch|Merge pull request|festure|enhacement|enhancemet|enhancemen]+(\(\w*\))(:\s[\s\S]+)/i)
// \\w*(\\(\\w*\\))(:\\s*\\w*)
const returnLink = (base, url, text) => `<a target="_blank" href="${base}${url}">Ver</a>`

function commonCommit(commit) {

    // fix(DocumentView): Prevent prev next buttons from dissapearing in small resolution

    commit.subjectClean = commit.subject;
    config.get('config.commit.removeFromCommit').forEach(function(remove) {
        commit.subjectClean = commit.subjectClean.replace(remove, "");
    })

    let branchType;

    branchType = commit.subjectClean.match(branchPrefix);

    commit.branchType = branchType != null && branchType != undefined ? branchType[0].replace(/(-|\\|\/)/, "") : "No branch type";
    commit.subjectClean = branchType != null && branchType != undefined ? commit.subjectClean.replace(branchType[0], "") : commit.subject;

    if (!branchType) {
        commit.branchType = "No branch type";
    }


    let issue = commit.subjectClean.match(projectPrefix);

    if (issue) {
        commit.subjectClean = commit.subjectClean.replace(issue[0], "").replace("-", "").replace("/", "");
        commit.subjectClean = _.startCase(commit.subjectClean);

        commit.issueClean = returnLink(config.get('config.commit.urlBugs.url'), issue[0], issue[0].toUpperCase());
        commit.issue = issue;
    } else {
        commit.issueClean = "";
        commit.issue = "No issue number";
    }

        commit.author = commit.author_name;
    commit.commitLink = returnLink(config.get('config.commit.urlCommit.url'), commit.commit, commit.abbreviated_commit);

    return commit;
}

module.exports = commonCommit;
