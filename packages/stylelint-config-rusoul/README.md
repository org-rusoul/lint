# `stylelint-config-rusoul`

stylelint recommend style with properties ordered.

just do `stylelint --fixAll` for *css files!

## Usage

```
// 安装
npm i -D stylelint stylelint-config-resoul

// 配置

// .stylelintrc
{
  "extends": "stylelint-config-resoul",
  "ignoreFiles": ["**/*.js"]
}

```

```
// VSCode中保存文件自动化
"editor.codeActionsOnSave": {
  "source.fixAll.stylelint": true,
},

```

## 依赖

```
stylint 15+

如果项目使用了postcss，需要
postcss 8+

```
