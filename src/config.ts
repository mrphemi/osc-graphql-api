import "dotenv/config";

export default {
  env: process.env.NODE_ENV || "development",
  port: Number(process.env.PORT || "3000"),
  getDbConfig: () => ({
    database: process.env.DB_NAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
  }),
};
