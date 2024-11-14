import type { Config } from 'jest';

const config: Config = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: 'src',
  testRegex: '.*\\.spec\\.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  collectCoverageFrom: ['**/*.(t|j)s'],
  coverageDirectory: '../coverage',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^@use-cases/(.*)$': '<rootDir>/use-cases/$1',
    '^@repositories/(.*)$': '<rootDir>/repositories/$1',
    '^@providers/(.*)$': '<rootDir>/providers/$1',
  },
};

export default config;
