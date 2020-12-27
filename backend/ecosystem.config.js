module.exports = {
  apps: [
    {
      name: "strapi",
      script: "npm",
      args: "start",
      watch: ".",
      watch_delay: 10000,
      ignore_watch: [
        "node_modules",
        ".env",
        "license.txt",
        "exports",
        ".cache",
        "build",
      ],
    },
  ],
};
