module.exports = {
    preset: 'ts-jest',
    coverageDirectory: '<rootDir>/coverage',
    coverageProvider: 'v8',
    coverageReporters: ['lcov'],
    roots: ['<rootDir>/tests/'],
    moduleNameMapper: {
        '@components/(.*)': '<rootDir>/src/components/$1',
        '@src/(.*)': '<rootDir>/src/$1'
    },
    transform: {'^.+\\.(ts|tsx)$': 'ts-jest'},
    setupFilesAfterEnv: [
        '<rootDir>/tests/config.ts'
    ]
};
