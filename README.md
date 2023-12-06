# lint configuration for Eslint StyleLint and Prettier;

`eslint-config-rusoul-react`

`prettier-config-rusoul`

`stylelint-config-rusoul`

![蓐收（rusoul）](./docs/rusoul.png)

## WHY
### simple dependencies, without confusing dependencies;
#### for eslint:

1. install
```
npm i -D eslint eslint-config-rusoul
```
2. eslintrc.js
```
module.exports = {
  extends: ['eslint-config-rusoul-react'],
  globals: {},
  rules: {},
}
```
#### for stylelint:
1. install
```
npm i -D stylelint stylelint-config-rusoul

// if postcss used
npm i -D postcss stylelint stylelint-config-rusoul
```
2. .stylelintrc
```
{
  "extends": "stylelint-config-rusoul",
  "ignoreFiles": ["**/*.js"]
}
```

#### for prettier
1. install
```
npm i -D prettier prettier-config-rusoul
```
2. .prettierrc
```
"prettier-config-rusoul"
```


## Develop

```
// install dependencies
npx lerna bootstrap

```
