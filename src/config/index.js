import * as dotenv from "dotenv";

dotenv.config();

export default {
  PORT: 3000,
  MONGO_URL: process.env.MONGO_URL,
  API_PREFIX: "/api",
};
