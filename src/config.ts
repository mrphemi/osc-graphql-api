import "dotenv/config";

const config = {
  env: process.env.NODE_ENV || "development",
  port: Number(process.env.PORT || "3000"),
  jwt_secret: process.env.JWT_SECRET,
  getDbConfig: () => ({
    database: process.env.DB_NAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
  }),
};

export default config;
