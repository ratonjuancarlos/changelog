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


const returnLink = (base, url, text) => `<a target="_blank" href="${base}${url}">Ver</a>`

function updateFields(result) {
   
    result.map(commit => {
        commit.subjectClean = commit.subject;
        config.get('config.commit.removeFromCommit').forEach(function(remove) {
            commit.subjectClean = commit.subjectClean.replace(remove, "");
        })

        let branchType = commit.subjectClean.match(branchPrefix);

        if (branchType) {
            commit.branchType = branchType[0].replace(/(-|\\|\/)/, "");
            commit.subjectClean = commit.subjectClean.replace(branchType[0], "");
        } else {
            commit.branchType = "No branch type";
        }

        let real_author  = shell.exec(`git log --pretty="%P" -n 1 ${commit.commit}`, {silent:true}).stdout.replace("\n", "").split(' ')[1];
        commit.author = shell.exec(`git log --pretty="%aN" ${real_author} -1`, {silent:true}).stdout.trim();

        let issue = commit.subjectClean.match(projectPrefix);

        if (issue) {
            commit.subjectClean = commit.subjectClean.replace(issue[0], "").replace("-", "").replace("/", "");
            commit.subjectClean = _.startCase(commit.subjectClean);
            
            commit.issueClean = returnLink(config.get('config.commit.urlBugs.url'), issue[0], issue[0].toUpperCase());
        } else {
            commit.issueClean = "No issue number";
        }

        commit.issue = issue;
        commit.commitLink = returnLink(config.get('config.commit.urlCommit.url'), commit.commit, commit.abbreviated_commit);;
    })

    return result;
}

module.exports = updateFields;
