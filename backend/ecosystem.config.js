module.exports = {
  apps: [
    {
      name: "strapi",
      script: "npm",
      args: "start",
      watch: true,
      exp_backoff_restart_delay: 100,
      ignore_watch: [".cache", "public", ".tmp"],
    },
  ],
};
