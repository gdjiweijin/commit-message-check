const path = require("path");
const { execSync } = require("child_process");


module.exports = {
    command: 'commitlint',
    describe: 'Run commitlint',
    handler() {
        const command = path.join(__dirname, '../node_modules/@commitlint/cli/cli.js');
        const configPath = path.resolve(__dirname, './config/commitlint-config.js');
        const commitMsgFile = '.git/COMMIT_EDITMSG';
        try {
            execSync(`${command} --edit ${commitMsgFile}`, { encoding: 'utf-8', stdio: 'inherit'})
        } catch (e) {
        }
    }
}