module.exports = {
  apps: [
    {
      name: "strapi",
      script: "npm",
      args: "run pm2-start",
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
    {
      script: "./service-worker/",
      watch: ["./service-worker"],
    },
  ],
};
