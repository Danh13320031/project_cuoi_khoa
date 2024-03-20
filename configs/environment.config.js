import {} from "dotenv/config";

const env = {
  databaseUrl: process.env.DATABASE_URL,
  host: process.env.SERVER_HOST,
  port: process.env.SERVER_PORT,
};

export default env;
