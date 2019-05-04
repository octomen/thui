module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'comma-dangle': 0,
    'import/prefer-default-export': 0,
    'import/extensions': ['js', 'vue', 'json', 'css']
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
