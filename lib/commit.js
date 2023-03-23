// https://github.com/commitizen/cz-cli
const path = require("path");
const reslove = p => path.join(__dirname, '../' + p);

module.exports = {
    command: 'commit',
    describe: 'Run commit the message with commitizen',
    handler() {
        process.stdin.on('data', key => {
            // ctrl + c
            if (key == '\u0003') {
                process.exit(130)
            }
        });
       require('commitizen/dist/cli/git-cz.js').bootstrap(
           {
               cliPath: reslove('node_modules/commitizen'),
               config: {
                   path: 'cz-conventional-changelog'
               }
           },
           process.argv.filter(n => n !== 'commit')
       )
    }
}