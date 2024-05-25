const { copySync, deleteSync, error } = require("devby");
const package = require("../package.json");
const fs = require("fs");

// 在线用例
if (fs.existsSync("./unpackage/dist/build/web")) {
    deleteSync("./docs/examples");
    copySync("./unpackage/dist/build/web", "./docs/examples");
} else {
    error(`
【温馨提示】例子代码不存在，未进行更新~
    `);
}

fs.writeFileSync("./docs/js/system.js", `window.uniQuery_system = {
    "version": "${package.version}"
};`);