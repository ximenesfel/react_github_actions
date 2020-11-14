module.exports = {
  branches: "main",
  repositoryUrl: "https://github.com/ximenesfel/react_github_actions",
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/github",
  ],
};
