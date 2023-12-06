# `eslint-config-rusoul-react`



## Usage

### Install
```
npm i -D eslint eslint-config-rusoul-react
```

### Configuration
```
// eslintrc.js
module.exports = {
  extends: ['eslint-config-rusoul-react'],
  globals: {},
  rules: {},
}

```

## Requirements
```
eslint 8+
```
make sure use correct version of eslint, you can check by package-lock.json file;
we need es2022(ecmaVersion:13) syntax， or you need install @babel/eslint-parser and config it.
