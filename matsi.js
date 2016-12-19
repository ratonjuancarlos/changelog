#! /usr/bin/env node
var co = require('co');
var prompt = require('co-prompt');
var program = require('commander');


program
 .arguments('<file>')
 .option('-t, --type <type>', 'The type of the changelog output')
 .option('-n, --name <name>', 'the name of the file input')
 .action(function(file) {
   co(function *() {
      var type = yield prompt('type: ');
      var name = yield prompt('name: ');
       console.log('type: %s name: %s file: %s',
          type, name, file);
    });
 })
 .parse(process.argv);

