# `stylelint-config-rusoul`

stylelint recommend style with properties ordered.

just do `stylelint --fixAll` for *css files!

## Usage

### Install
```
npm i -D stylelint stylelint-config-rusoul
```

### Configuration
```
// .stylelintrc
{
  "extends": "stylelint-config-rusoul",
  "ignoreFiles": ["**/*.js"]
}

```

### IDE
```
// auto fix on file in VSCode
"editor.codeActionsOnSave": {
  "source.fixAll.stylelint": true,
},

```

## Requirements

```
*stylelint 15+

postcss 8+ // depends on your project
```
