# `eslint-config-rusoul-react`

> TODO: description

## Usage

```
// 安装
npm i -D eslint eslint-config-rusoul-react -D

// 配置

// eslintrc.js
module.exports = {
  extends: ['eslint-config-rusoul-react'],
  globals: {},
  rules: {},
}

```

## Important
```
eslint 8+
确认package-lock.json里面最外层eslint版本能不能对上

需要支持es2022(ecmaVersion:13)语法，否则需要使用@babel/eslint-parser来额外定制

```