module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  transform: {
    "^.+\\.[tj]sx?$": "babel-jest",
    "^.+\\.mdx$": "@storybook/addon-docs/jest-transform-mdx"
  },
  transformIgnorePatterns: ["/node_modules/(?!(@storybook/.*\\.vue$))"],
};
