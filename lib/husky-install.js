// https://typicode.github.io/husky/#/
const path = require('path');
const { execSync } = require('child_process');

module.exports = {
    command: 'husky-install',
    describe: 'Run husky install',
    handler() {
        const command = path.join(__dirname, '../node_module/husky/lib/bin.js');
        execSync(`${command} install ${path.resolve(__dirname, '../config/.husky')}`)
    }
}