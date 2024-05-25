module.exports = {
    testTimeout: 20000,
    reporters: [
        'default'
    ],
    watchPathIgnorePatterns: ['/node_modules/', '/dist/', '/.git/'],
    moduleFileExtensions: ['js', 'json'],
    rootDir: __dirname,

    // 测试文件目录
    testMatch: ["<rootDir>/pages/component/title/title.test.js"],
    testPathIgnorePatterns: ['/node_modules/']
}
