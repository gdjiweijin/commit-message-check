
// https://github.com/conventional-changelog/commitlint/blob/master/docs/reference-rules.md
module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'scope-case': [0, 'never']
    }, // 可选，自定义rules，覆盖@commitlint/config-conventional的配置
}