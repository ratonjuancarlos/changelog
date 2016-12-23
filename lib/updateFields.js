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


const branchPrefixAng = new RegExp(`([${branchSearch}|${branchPrefixSin}]+)(\\(\\w*\\))(:\\s[\\s\\S(?=:\\s)]+)`, 'i');
// const branchPrefixAng = new RegExp(`^(ci)(\\(\\))(: cz conventional changelog)`, 'gi');

// 'ci(): cz conventional changelog'.match(/[fix|feature|ci|enhancement|feat|docs|BREAKING|refactor|style|test|chore|Merge branch|Merge pull request|festure|enhacement|enhancemet|enhancemen]+(\(\w*\))(:\s[\s\S]+)/i)
// \\w*(\\(\\w*\\))(:\\s*\\w*)


const returnLink = (base, url, text) => `<a target="_blank" href="${base}${url}">Ver</a>`

function updateFields(result) {
   
   // fix(DocumentView): Prevent prev next buttons from dissapearing in small resolution


    result.map(commit => {

        commit.subjectClean = commit.subject;
        config.get('config.commit.removeFromCommit').forEach(function(remove) {
            commit.subjectClean = commit.subjectClean.replace(remove, "");
        })

        let branchType;

        if (commit.AngularStyle) {
            branchType = commit.subjectClean.match(branchPrefixAng);
            console.log(branchType)
            commit.branchType = branchType[1];
            commit.subjectClean = `${branchType[2]}${branchType[3]}`
        }else{
            branchType = commit.subjectClean.match(branchPrefix);
            // console.log(commit.subjectClean.match(branchPrefix))
            // console.log(commit.subjectClean)
            commit.branchType = branchType != null && branchType != undefined ? branchType[0].replace(/(-|\\|\/)/, "") : "No branch type";
            commit.subjectClean = branchType != null && branchType != undefined ? commit.subjectClean.replace(branchType[0], "") : commit.subject;
        }
        if (!branchType) {
            commit.branchType = commit.AngularStyle ? "Direct to develop" : "No branch type";
        }

        let real_author  = shell.exec(`git log --pretty="%P" -n 1 ${commit.commit}`, {silent:true}).stdout.replace("\n", "").split(' ')[1];
        commit.author = shell.exec(`git log --pretty="%aN" ${real_author} -1`, {silent:true}).stdout.trim();

        let issue = commit.subjectClean.match(projectPrefix);

        if (issue) {
            commit.subjectClean = commit.subjectClean.replace(issue[0], "").replace("-", "").replace("/", "");
            commit.subjectClean = _.startCase(commit.subjectClean);
            
            commit.issueClean = returnLink(config.get('config.commit.urlBugs.url'), issue[0], issue[0].toUpperCase());
            commit.issue = issue;
        } else {
            commit.issueClean = "";
            commit.issue = commit.AngularStyle ? commit.subject : "No issue number";
            commit.author = commit.author_name;

        }

        commit.commitLink = returnLink(config.get('config.commit.urlCommit.url'), commit.commit, commit.abbreviated_commit);
    })

process.exit()

    return result;
}

module.exports = updateFields;
