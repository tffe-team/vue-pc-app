'use strict'
const { execSync } = require('child_process');
const staticVersion = (execSync('git symbolic-ref --short -q HEAD', {})).toString().replace('\n', '');
module.exports = {
    PROJECT_NAME: "vue-pc-demo",
    OUT_PATH: staticVersion === 'master' ? (new Date().getTime()) + '' : staticVersion //1545205109146
}