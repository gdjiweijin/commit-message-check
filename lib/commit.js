const path = require("path");

const reslove = p => path.join(__dirname, '../' + p);
console.log(reslove('node_modules/commitizen'))

module.exports = {
    command: 'commit',
    describe: 'Run commit the message with commitizen',
    handler() {
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