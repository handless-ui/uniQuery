const os = require('os')

module.exports = {
    "is-custom-runtime": false,
    "compile": true,
    "h5": {
        "options": {
            "headless": true // 配置是否显示 puppeteer 测试窗口
        },
        "executablePath": ""
    },
    "mp-weixin": {
        "port": 9420,
        "account": "",
        "args": "",
        "cwd": "",
        "launch": true, // 是否主动拉起开发者工具
        "teardown": "disconnect", // 可选值 "disconnect"|"close" 运行测试结束后，断开开发者工具或关闭开发者工具
        "remote": false, // 是否真机自动化测试
        "executablePath": os.platform() === "darwin" ? "/Applications/wechatwebdevtools.app/Contents/MacOS/cli" : ""
    },
    "app-plus": {
        "android": {
            "id": "",
            "executablePath": ""
        },
        "version": "",
        "ios": {
            "id": "",
            "executablePath": ""
        }
    }
}
