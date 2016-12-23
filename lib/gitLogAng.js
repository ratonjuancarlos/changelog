// 'use strict';
var config = require('config');
var _ = require('lodash');
// var logOptions = require('../config/logOptions.json');


const configLog = config.get('config.log');
const logOptions = config.get('config.logOptions');

const format = configLog.logFormat.map(option => {
	return  `&#34;${option}&#34;:&#34;${logOptions[option]}&#34;`
})

var cmd = `git log --grep="^\\w*(\\w*):\\s*\\w*" --since=${configLog.logSince} --pretty=format:"{ ${format.join(',')},&#34;AngularStyle&#34;:true}," --date=format:${configLog.logDateFormat}`;

module.exports = cmd;

