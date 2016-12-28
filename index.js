#! /usr/bin/env node

const createHtmlChangelog =  require('./lib/createHtmlChangelog');

exports.generateChangeLog = function() {
    createHtmlChangelog()
}

this.generateChangeLog();
