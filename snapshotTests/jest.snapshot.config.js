module.exports = {
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  globals: {
    "ts-jest": {
      tsConfig: "./snapshotTests/tsconfig.json"
    }
  },
  preset: 'jest-puppeteer',
  testRegex: './*\\.snapshotTest\\.ts$',
  setupFilesAfterEnv: ['./setupSnapshotTests.ts']
};
