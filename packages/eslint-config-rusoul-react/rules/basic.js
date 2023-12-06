module.exports = {
  env: {
    browser: true,
  },
  parserOptions: {
    ecmaVersion: "latest",
  },
  extends: ["plugin:prettier/recommended"],
  rules: {
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
      },
    ],
    "no-unused-expressions": [
      "error",
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: false,
      },
    ],
    "no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
    "no-param-reassign": ["error", { props: false }],
    "prefer-destructuring": ["error", { object: true, array: false }],
    "no-underscore-dangle": "off",
    "class-methods-use-this": "off",
    "func-names": "off",
    "no-restricted-syntax": [
      "error",
      {
        selector: "ForInStatement",
        message:
          "for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.",
      },
      {
        selector: "LabeledStatement",
        message: "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.",
      },
      {
        selector: "WithStatement",
        message: "`with` is disallowed in strict mode because it makes code impossible to predict and optimize.",
      },
    ],
    "import/prefer-default-export": ["off"],
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [
          "test/**", // tape, common npm pattern
          "tests/**", // also common npm pattern
          "spec/**", // mocha, rspec-like pattern
          "**/__tests__/**", // jest pattern
          "**/__mocks__/**", // jest pattern
          "test.{js,jsx}", // repos with a single test file
          "test-*.{js,jsx}", // repos with multiple top-level test files
          "**/*{.,_}{test,spec}.{js,jsx}", // tests where the extension or filename suffix denotes that it is a test
          "**/jest.config.js", // jest config
          "**/jest.setup.js", // jest setup
          "**/webpack.config.js", // webpack config
          "**/webpack.config.*.js", // webpack config
          "**/rollup.config.?(m|c)js", // rollup config
          "**/rollup.config.*.js", // rollup config
          "**/gulpfile.js", // gulp config
          "**/gulpfile.*.js", // gulp config
          "**/.eslintrc.js", // eslint config
          "**/vite.config.{js,ts}", // vite config
          "**/vite.config.*.{js,ts}", // vite config
          "mock/**", // lulu mock
          "lk.config.{js,ts,cjs,cts,mjs,mts}", // lulu config
        ],
      },
    ],
    "react/require-default-props": "off",
    "no-underscore-dangle": "off",
    "class-methods-use-this": "off",
    "react/jsx-filename-extension": ["error", { extensions: [".js", ".jsx", "ts", "tsx"] }],
    "react/static-property-placement": "off",
    "react/jsx-props-no-spreading": "off",
    "react/display-name": "warn",
    "react/jsx-no-useless-fragment": ["error", { allowExpressions: true }],
  },
  reportUnusedDisableDirectives: true,
};
