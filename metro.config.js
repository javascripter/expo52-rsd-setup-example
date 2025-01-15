// Learn more https://docs.expo.dev/guides/monorepos
const { getDefaultConfig } = require('expo/metro-config');

// Find the project and workspace directories
const projectRoot = __dirname;

const config = getDefaultConfig(projectRoot);
// 1. Enable Metro support for symlinks and package exports
config.resolver.unstable_enablePackageExports = true;


// Note: The below config is recommended in the RSD documentation but it causes bundling to fail
// in a non-monorepo environment. It is commented out for now.
// See: https://github.com/facebook/react-strict-dom/discussions/254

// 2. Force Metro to resolve (sub)dependencies only from the `nodeModulesPaths`
// config.resolver.disableHierarchicalLookup = true;

module.exports = config;