'use strict'
const { execSync } = require('child_process');
const md5 = require('md5');
const stat = fs.statSync(path.join(__dirname, '.git'));
const staticVersion = stat ? (execSync('git symbolic-ref --short -q HEAD', {})).toString().replace('\n', '') : 'test';
module.exports = {
    PROJECT_NAME: "vue-h5-demo",
    OUT_PATH: md5(staticVersion)
}