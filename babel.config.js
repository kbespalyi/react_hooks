const isCjs = process.env.IS_CJS === 'true';
process.env.NODE_ENV = 'production';

module.exports = {
  presets: [
    [
      'babel-preset-react-app',
      {
        useESModules: !isCjs,
        typescript: true,
        flow: false,
        helpers: true,
        absoluteRuntime: false,
        development: process.env.BABEL_ENV === 'development',
      },
    ],
  ],
  ignore: [
    '**/src/**/*.d.ts',
    '**/src/setupTests.js',
    '**/src/setupTests.ts',
    '**/src/**/__tests__/**/*.ts',
    '**/src/**/__tests__/**/*.tsx',
    '**/src/**/*.test.tsx',
    '**/src/**/*.test.ts',
  ],
};
