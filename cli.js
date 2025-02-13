#!/usr/bin/env node

// https://cheatcode.co/blog/how-to-build-a-command-line-interface-cli-using-node-js
// https://sergiodxa.com/tutorials/use-package-json-bin-to-create-a-cli
// https://dev.to/nausaf/creating-an-npm-package-that-runs-on-command-line-with-npx-9a0

const program = require('commander');
const process = require('process');
const package = require('./package.json');
const boilerplate = require('frappejs/model/boilerplate');
// const boilerplate = require('./model/boilerplate');

// console.log( 'frappejs', 'cli' );

// program
//     .command('new-app <name>')
//     .description('Create a new app in the `apps` folder')
//     .action((name) => {
//         boilerplate.make_app_files(name);
//     });

program
    .version(package.version)

program
    .command('start [mode]')
    .description('Start development server')
    .action(require('./webpack/start'))

program
    .command('build [mode]')
    .description('Build assets for production')
    .action(require('./webpack/build'))

program
    .command('new-model <name>')
    .description('Create a new model in the `models/doctype` folder')
    .action((name) => {
        boilerplate.make_model_files(name);
    });

program.parse(process.argv);