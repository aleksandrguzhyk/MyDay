const os = require('os')
module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  extends: [
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'plugin:react/recommended',
    'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    'plugin:react-native/all',
    'plugin:import/typescript',
  ],
  plugins: ['react', 'react-native', 'react-hooks', 'module-resolver'],
  env: {
    jest: true,
    'react-native/react-native': true,
  },
  rules: {
    // 'module-resolver/use-alias': 2,
    'import/no-unresolved': 'off',
    '@typescript-eslint/no-namespace': 0,
    '@typescript-eslint/interface-name-prefix': [
      'error',
      {prefixWithI: 'always'},
    ],
    semi: ['error', 'never'],
    'linebreak-style':
      os.platform() === 'win32' ? ['error', 'windows'] : ['error', 'unix'],
    'no-use-before-define': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'comma-dangle': 'off',
    'padded-blocks': 'off',
    'arrow-body-style': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react-native/no-unused-styles': 2,
    'react-native/split-platform-components': 2,
    'react-native/no-inline-styles': 2,
    'react-native/no-color-literals': 2,
    'react-native/no-raw-text': 2,
    'react-native/no-single-element-style-arrays': 2,
  },
  settings: {
    'import/resolver': {
      //   alias: {
      //     map: [['src', './src/']],
      //     extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.d.ts'],
      //   },
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        // moduleDirectory: ['node_modules', 'src'],
        // paths: ['src'],
      },
    },
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  globals: {
    fetch: false,
  },
}
