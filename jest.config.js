module.exports = {
    bail: 1,
    verbose: true,
    collectCoverage: true,
    collectCoverageFrom: ["./src/**/*.{ts,tsx}"],
    coveragePathIgnorePatterns: ["/node_modules/", "/store/"],
    coverageDirectory: "./coverage",
    globals: {},
    moduleFileExtensions: ["tsx", "ts"],
};
