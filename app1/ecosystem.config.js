module.exports = {
  apps: [
    {
      name: "app1",
      script: "index.js",
      exec_mode: "cluster",
      merge_logs: true,
      instances: 6,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env_dev: {
        NODE_ENV: "dev",
      },
      env_staging: {
        NODE_ENV: "staging",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
