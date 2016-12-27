'use strict';

const _ = require('lodash');
var config = require('config');
var shell = require('shelljs');
var angularCommit = require('./angularCommit');
var commonCommit = require('./commonCommit');


function updateFields(result) {
    result.map(commit => {
        return commit.AngularStyle ? angularCommit(commit) : commonCommit(commit);
    })

    return result;
}

module.exports = updateFields;
