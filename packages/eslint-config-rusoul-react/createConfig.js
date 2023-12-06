module.exports = function (options = {}) {
  const config = {
    env: {
      browser: true,
      ...options.env,
    },
    parserOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      ...options.parserOptions,
    },
    extends: [
      "./rules/best-practices",
      "./rules/errors",
      "./rules/node",
      "./rules/style",
      "./rules/variables",
      "./rules/es6",
      "./rules/imports",
      "./rules/strict",
      "./rules/react",
      "./rules/react-hooks",
      "./rules/basic",
      ...(options.extends || []),
      "./rules/prettier",
    ],
    rules: {
      ...options.rules,
    },
    reportUnusedDisableDirectives: true,
  };

  return config;
};
