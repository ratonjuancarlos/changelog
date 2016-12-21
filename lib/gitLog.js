// 'use strict';
var config = require('config');
var _ = require('lodash');
var logOptions = require('../config/logOptions.json');


const configLog = config.get('config.log');

const format = configLog.logFormat.map(option => {
	return  `&#34;${option}&#34;:&#34;${logOptions[option]}&#34;`
})

const gitLogGrep = configLog.logGrep.map(grep => '\\('+grep+'\\)')

var cmd = `git log --grep="${gitLogGrep.join('\\|')}" --since=${configLog.logSince} --pretty=format:"{ ${format.join(',')}}," --date=format:${configLog.logDateFormat}`;

module.exports = cmd;

