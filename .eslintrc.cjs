module.exports = {
  extends: ["alloy", "alloy/vue", "alloy/typescript"],
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: {
      js: "@babel/eslint-parser",
      jsx: "@babel/eslint-parser",

      ts: "@typescript-eslint/parser",
      tsx: "@typescript-eslint/parser",

      // Leave the template parser unspecified, so that it could be determined by `<script lang="...">`
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true, // 表示代码可以使用 ECMAScript 6+ 的语法特性
  },
  globals: {
    // Your global variables (setting to false means it's not allowed to be reassigned)
    //
    // myGlobal: false
  },
  rules: {
    // Customize your rules
    //
    // Please keep this rule off because it requiresTypeChecking
    // https://github.com/vuejs/vue-eslint-parser/issues/104
    // https://github.com/typescript-eslint/typescript-eslint/pull/5318
    "@typescript-eslint/prefer-optional-chain": "off",
  },
};
