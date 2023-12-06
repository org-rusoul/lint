// kebab case property name
module.exports = {
  rules: {
    "custom-media-pattern": [
      "^([a-z][a-z0-9]*)(-[a-z0-9]+)*$",
      {
        message: (name) => `Expected custom media query name "${name}" to be kebab-case`,
      },
    ],
    "custom-property-pattern": [
      "^([a-z][a-z0-9]*)(-[a-z0-9]+)*$",
      {
        message: (name) => `Expected custom property name "${name}" to be kebab-case`,
      },
    ],
    "keyframe-selector-notation": "percentage-unless-within-keyword-only-block",
    "keyframes-name-pattern": [
      "^([a-z][a-z0-9]*)(-[a-z0-9]+)*$",
      {
        message: (name) => `Expected keyframe name "${name}" to be kebab-case`,
      },
    ],
    "selector-class-pattern": [
      "^([a-z][a-z0-9]*)(-[a-z0-9]+)*$",
      {
        message: (selector) => `Expected class selector "${selector}" to be kebab-case`,
      },
    ],
    "selector-id-pattern": [
      "^([a-z][a-z0-9]*)(-[a-z0-9]+)*$",
      {
        message: (selector) => `Expected id selector "${selector}" to be kebab-case`,
      },
    ],
  },
};
