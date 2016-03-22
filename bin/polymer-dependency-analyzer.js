'use strict';

const pda = require('../index.js');
const args = require('command-line-args');

const cli = args([
   {
       name: 'help',
       type: Boolean,
       alias: 'h',
       description: 'Print usage'
   },
   {
       name: 'endpoints',
       type: String,
       alias: 'e',
       defaultOption: true,
       multiple: true,
       description: 'Application endpoints to analyze'
   },
   {
       name: 'dest-dir',
       type: String,
       alias: 'd',
       description: 'Output directory'
   }
]);

const usage = cli.getUsage({
    header: 'polymer-dependency-analyzer visualizes component dependencies in a polymer application',
    title: 'polymer-dependency-analyzer'
});
const options = cli.parse();

if (options.help) {
    console.log(usage);
    process.exit(0);
}

if (!options.endpoints || options.endpoints.length === 0) {
    console.error('Missing endpoints');
    console.log(usage);
    process.exit(1);
}

const analyzer = new pda(options);
analyzer.analyze();