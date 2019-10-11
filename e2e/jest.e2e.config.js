module.exports = {
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  globals: {
    "ts-jest": {
      tsConfig: "./e2e/tsconfig.json"
    }
  },
  preset: 'jest-puppeteer',
  testRegex: './*\\.e2e-spec\\.ts$'
};
