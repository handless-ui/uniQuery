const { copyDisk, deleteDisk } = require("oipage/nodejs/disk/index");
const package = require("../package.json");
const { existsSync, writeFileSync } = require("fs");

// 在线用例
if (existsSync("./dist/build/h5")) {
    deleteDisk("./docs/examples");
    copyDisk("./dist/build/h5", "./docs/examples");
} else {
    console(`\x1b[31m
【温馨提示】例子代码不存在，未进行更新~
    `);
}

writeFileSync("./docs/js/system.js", `window.uniQuery_system = {
    "version": "${package.version}"
};`);