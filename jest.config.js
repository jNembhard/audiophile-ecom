// /** @type {import('ts-jest').JestConfigWithTsJest} */
const nextJest = require("next/jest");

const customJestConfig = {
  // preset: "ts-jest",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  // moduleDirectories: ["node_modules", "<rootDir>/"],
  // testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  testEnvironment: "jest-environment-jsdom",
  // testEnvironment: "node",
};

const createJestConfig = nextJest({
  dir: "./",
})(customJestConfig);

module.exports = async () => {
  const jestConfig = await createJestConfig();

  const moduleNameMapper = {
    ...jestConfig.moduleNameMapper,
    // Handle module aliases (this will be automatically configured for you soon)
    "^@/components/(.*)$": "<rootDir>/components/$1",
    "^@/pages/(.*)$": "<rootDir>/pages/$1",
    "^/@/assets/(.*)$": "<rootDir>/assets/$1",
    "^/@/hooks/(.*)$": "<rootDir>/hooks/$1",
    "^/@/data/(.*)$": "<rootDir>/data/$1",
    "^/@/interfaces/(.*)$": "<rootDir>/interfaces/$1",
    "^/@/store/(.*)$": "<rootDir>/store/$1",
    "^/@/styles/(.*)$": "<rootDir>/styles/$1",
    "^/@/utils/(.*)$": "<rootDir>/utils/$1",
    "^/@/variables/(.*)$": "<rootDir>/variables/$1",
    "^/@/atoms/(.*)$": "<rootDir>/atoms/$1",
    "^/@/molecules/(.*)$": "<rootDir>/molecules/$1",
    "^/@/organisms/(.*)$": "<rootDir>/organisms/$1",
    "^/@/templates/(.*)$": "<rootDir>/templates/$1",
  };
  return { ...jestConfig, moduleNameMapper };
};

// const customJestConnfig = {
//   setupFilesAfterEnv: [`<rootDir>/jest.setup.ts`],
//   testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
// };

// module.exports = createJestConfig(customJestConfig);

// module.exports = {
//   preset: "ts-jest",
//   testEnvironment: "node",
// };
