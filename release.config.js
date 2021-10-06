module.exports = {
  branches: "master",
  repositoryUrl: "https://github.com/giorgiocl/react-app",
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/npm",
    [
      "@semantic-release/github",
      [
        {path: "build.zip", label: "Build"},
        {path: "coverage.zip", label: "Coverage"},
      ],
    ],
  ],
};
