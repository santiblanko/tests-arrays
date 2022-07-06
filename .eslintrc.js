module.exports = {
  'env': {
    'browser': true,
    'es6': true,
  },
  'extends': [
    'google',
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
  },
  'parserOptions': {
    'ecmaVersion': 2018,
    'sourceType': 'module',
  },
  'rules': {
    'max-len': ['error', {'code': 120}],
    'require-jsdoc': 'off',
    'linebreak-style': 'off',
    'operator-linebreak': ["error", "before"],
    'newline-per-chained-call': [1, {'ignoreChainWithDepth': 2}],
  },
};
