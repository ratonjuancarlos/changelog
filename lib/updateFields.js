'use strict';

const _ = require('lodash');
var config = require('config');


const projectSearch = config.get('config.project').map(proj => proj.value).join('|')
const projectPrefix = new RegExp(`^(${projectSearch})-(\\d*)`);

const branchPrefixSin = config.get('config.prefixSynonymous').join('|')
const branchSearch = config.get('config.prefix').map(prfx => prfx.value).join('|')
const branchPrefix = new RegExp(`^(${branchSearch}|${projectSearch}|${branchPrefixSin}|\\d+)(-|\\u005c|\\u002F)+`, 'gi');

// const branchPrefix = `/^(${branchSearch}|${projectSearch}|\\d+)(-|\u005c|\\u002F)*/gi`;
// const branchPrefix = /^(festure|feature|enhacenment|bugfix|PA|EO|V5X|\d*)(-|\\|\/)+/gi;   

function updateFields(result) {
   
    result.map(commit => {
        commit.subjectClean = commit.subject;
        config.get('config.removeFromCommit').forEach(function(remove) {
            commit.subjectClean = commit.subjectClean.replace(remove, "");
        })
        let branchType = commit.subjectClean.match(branchPrefix);

        if (branchType) {
            commit.branchType = branchType[0].replace(/(-|\\|\/)/, "");
            commit.subjectClean = commit.subjectClean.replace(branchType[0], "");
        } else {
            commit.branchType = "No branch type";
        }


        let issue = commit.subjectClean.match(projectPrefix);
        if (issue) {
        // console.log(issue)
            commit.subjectClean = commit.subjectClean.replace(issue[0], "").replace("-", "").replace("/", "");
            commit.subjectClean = _.startCase(commit.subjectClean);
            commit.issueClean = '<a  target="_blank"  href="https://intelligize-scrum.atlassian.net/browse/' + issue[0] + '">' + issue[0] + '</a> ';
            commit.commitLink = '<a  target="_blank"  href="https://bitbucket.org/intelligize/intelligize.ui/commits/' + commit.commit + '">' + commit.abbreviated_commit + '</a> ';
        } else {
            commit.issueClean = "No issue number";
        }
    })

    return result;
}

module.exports = updateFields;
