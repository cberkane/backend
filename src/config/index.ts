import { Config } from "../core/types/config";
import dotenv from "dotenv";
dotenv.config();

const prodMode = process.env.NODE_ENV === "dev" ? false : true;

const config: Config = {
  port: process.env.APP_PORT,
};

if (prodMode) {
  config.databases = {};
} else {
  config.databases = {};
}

export default config;
