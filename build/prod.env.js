'use strict'
const { execSync } = require('child_process');
const staticVersion = (execSync('git symbolic-ref --short -q HEAD', {})).toString().replace('\n', '');
module.exports = {
    PROJECT_NAME: "mofun",
    OUT_PATH: staticVersion === 'master' ? '1545205109146' : staticVersion //1545205109146
}