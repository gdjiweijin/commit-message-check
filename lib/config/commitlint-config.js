function scopeByTest(parsed) {
    const scope = parsed.scope || '';
    return [
        scope !== 'test',
        'scope-by-test'
    ]
}

// https://github.com/conventional-changelog/commitlint/blob/master/docs/reference-rules.md
module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'scope-min-length': [2, 'always', 1],
        'scope-by-test': [2, 'always']
    }, // 可选，自定义rules，覆盖@commitlint/config-conventional的配置
    plugins: [
        {
            rules: {
                'scope-by-test': scopeByTest
            }
        }
    ]
}