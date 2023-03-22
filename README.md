# commit-message-check
commit 信息的规范化是非常必要的， 特别是在项目出现问题时候，commit 信息有助于问题定位问题，并且这是一个非常基础的能力
我们可以做成一个公共的基本给各个项目使用

## Commit规范
Commitizen: 符面 Commit Message 标准的一款工具。让我们方便编写符合要求的commit 信息
cz-conventional-changelog: 是搭配Commitizen的一个适配器，定义了对应的规范，这个规范符合angular 公司的规范，（https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#commits）
当然Commitizen也可以搭配其他适配器使用，前端比较多直接用这个规范

@commitlint/cli: 可以对commit 信息进行校验
@commitlint/config-conventional： 集成了一些常用commit 信息进行校验规则，搭配@commitlint/cli使用

