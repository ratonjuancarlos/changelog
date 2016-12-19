// 'use strict';
var shell = require('shelljs');
var config = require('config');
var _ = require('lodash');
var logOptions = require('../config/logOptions.json');


const configLog = config.get('config.log');

const format = configLog.logFormat.map(option => {
	return  `'${option}':'${logOptions[option]}'`
})

const gitLogGrep = configLog.logGrep.map(grep => '\\('+grep+'\\)')

var cmd = `git log --grep="${gitLogGrep.join('\\|')}" --since=${configLog.logSince} --pretty=format:"{ ${format.join(',')}},"  --date=format:${configLog.logDateFormat}`;
console.log(cmd)
module.exports = cmd;

