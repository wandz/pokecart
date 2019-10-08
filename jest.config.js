const tsJestPreset = require("jest-preset-angular/jest-preset");

module.exports = {
  ...tsJestPreset,
  globals: {
    ...tsJestPreset.globals,
    "ts-jest": {
      ...tsJestPreset.globals["ts-jest"],
      tsConfig: "./tsconfig.spec.json"
    }
  },
  setupFilesAfterEnv: [
    "<rootDir>/node_modules/@angular-builders/jest/dist/jest-config/setup.js",
    "<rootDir>/test.ts"
  ],
  transform: {
    "^.+\\.(ts|js|html)$": "ts-jest"
  },
  testMatch: [
    "**/__tests__/**/*.+(ts|js)?(x)",
    "**/+(*.)+(spec|test).+(ts|js)?(x)"
  ],
  testEnvironment: "jest-environment-jsdom-thirteen",
  transformIgnorePatterns: ["node_modules/(?!@ngrx)"],
  collectCoverageFrom: [
    "src/app/**/*.ts",
    "!src/app/**/*.module.ts",
    "!srca/app/**/*.array.ts",
    "!src/app/fragmentTypes.ts"
  ],
  moduleFileExtensions: ["ts", "tsx", "js", "json"],
  testPathIgnorePatterns: ["/node_modules/", "/dist/", "src/app/*.{js}"],
  snapshotSerializers: [
    "jest-preset-angular/AngularSnapshotSerializer.js",
    "jest-preset-angular/HTMLCommentSerializer.js"
  ]
};
