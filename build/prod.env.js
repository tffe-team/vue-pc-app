'use strict'
const { execSync } = require('child_process');
const path = require('path'); 
const fs = require('fs');
const md5 = require('md5');
const isExist = fs.existsSync(path.join( __dirname, '../.git'))
const staticVersion = isExist ? (execSync('git symbolic-ref --short -q HEAD', {})).toString().replace('\n', '') : 'test';
module.exports = {
    PROJECT_NAME: "vue-pc-demo",
    OUT_PATH: md5(staticVersion)
}