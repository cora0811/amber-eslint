# my-eslint

配置内容在文件：lib/config.js

lint-staged-config.js中 更改了package.json中的lint-staged
我们现在的项目配置基本是 "eslint --cache --fix" 和 "eslint . --ext .js,.jsx,.ts,.tsx",
新增："tsc --noEmit --jsx react-jsx --allowJs" "jest --bail --findRelatedTests"
可以在有ts报错的时候，禁止提交代码

ts-config.js 生成了一个aelftsconfig.json文件，为了不覆盖项目中已有的tsconfig
aelftsconfig.json是一些基础配置

generate-husky.js：生成.husky 和 commit-msg/pre-commit文件，并授权(chmod +x .husky/pre-commit / chmod +x .husky/commit-msg)

# 使用
项目中通过npm安装，运行 yarn my-eslint 后：
1. 自动安装eslint / prettier等插件
2. 生成相关的配置文件(commitlint.config.js / .editorconfig / .eslintrc / .prettierrc / .stylelintrc.json / aelftsconfig.json)、
3. 运行npx husky install，生成.husky并生成commit-msg 和 pre-commit
4. 修改package.json中的lint-staged