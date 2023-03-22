const path = require("path");

const reslove = p => path.join(__dirname, '../' + p);

module.exports = {
    command: 'commit',
    describe: 'Run commit the message with commitizen',
    handler() {
       require('commitizen/dist/cli/git-cz.js').bootstrap(
           {
               clipPath: reslove('node_modules/commitizen'),
               config: {
                   path: 'cz-conventional-changelog"'
               }
           }
       )
    }
}