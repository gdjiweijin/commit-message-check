const path = require("path");
const { execSync } = require("child_process");


module.exports = {
    command: 'commitlint',
    describe: 'Run commitlint',
    handler() {
        const command = path.join(__dirname, '../node_modules/@commitlint/cli/cli.js');
        const configPath = path.resolve(__dirname, './config/commitlint-config.js');
        console.log(command, 'command');
        console.log(configPath, 'configPath')
        // const gitDir = execSync('git rev-parse --git-div');
        // const commitMsgFile = `${gitDir || '.git'}/COMMIT_EDITMSG`
        const commitMsgFile = `./.git/COMMIT_EDITMSG`
        execSync(`${command} -g ${configPath} --edit ${commitMsgFile}`)
    }
}