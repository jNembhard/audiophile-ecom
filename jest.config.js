// /** @type {import('ts-jest').JestConfigWithTsJest} */
const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

// /** @type {import('ts-jest').JestConfigWithTsJest} */

const customJestConfig = {
  // preset: "ts-jest",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  // modulePaths: ["<rootDir>/"],
  // moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "^@/components/(.*)$": "<rootDir>/components/$1",
    "^@/pages/(.*)$": "<rootDir>/pages/$1",
    "^@/assets/(.*)$": "<rootDir>/assets/$1",
    "^@/hooks/(.*)$": "<rootDir>/hooks/$1",
    "^@/data/(.*)$": "<rootDir>/data/$1",
    "^@/interfaces/(.*)$": "<rootDir>/interfaces/$1",
    "^@/store/(.*)$": "<rootDir>/store/$1",
    "^@/styles/(.*)$": "<rootDir>/styles/$1",
    "^@/utils/(.*)$": "<rootDir>/utils/$1",
    "^@/variables/(.*)$": "<rootDir>/variables/$1",
    "^@/atoms/(.*)$": "<rootDir>/atoms/$1",
    "^@/molecules/(.*)$": "<rootDir>/molecules/$1",
    "^@/organisms/(.*)$": "<rootDir>/organisms/$1",
    "^@/templates/(.*)$": "<rootDir>/templates/$1",
    "^@/test_utils/(.*)$": "<rootDir>/test_utils/$1",
    "^@/test_utils_two/(.*)$": "<rootDir>/test_utils_two/$1",
    // "^@/__tests__/(.*)$": "<rootDir>/__tests__/$1",
  },
  // testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
};

module.exports = createJestConfig(customJestConfig);
