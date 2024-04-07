const { Sequelize } = require("sequelize");
const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

const toBool = (x) => x == "true";

DATABASE_URL = process.env.DATABASE_URL || "./lib/database.db";
let HANDLER = "false";
module.exports = {
  SPARKY_API: "https://api-aswin-sparky.koyeb.app",
  ANTILINK: toBool(process.env.ANTI_LINK) || false,
  LOGS: toBool(process.env.LOGS) || true,
  ANTILINK_ACTION: process.env.ANTI_LINK || "kick",
  SESSION_ID:process.env.SESSION_ID || " ",
  LANG: process.env.LANG || "EN",
  HANDLERS: process.env.PREFIX || '^[.]',
  BRANCH: "master",
  STICKER_DATA: process.env.STICKER_DATA || "𝗤𝗨𝗘𝗘𝗡 𝗡𝗘𝗭𝗨𝗞𝗢;𝗚𝗢𝗗 𝗭𝗘𝗡𝗜𝗧𝗦𝗨⚇",
  BOT_INFO: process.env.BOT_INFO || " ",
  AUDIO_DATA: process.env.AUDIO_DATA || "𝗚𝗢𝗗 𝗭𝗘𝗡𝗜𝗧𝗦𝗨;𝗤𝗨𝗘𝗘𝗡 𝗡𝗘𝗭𝗨𝗞𝗢;https://i.imgur.com/4acVqY7.jpeg",
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
  CAPTION: process.env.CAPTION || "𝗚𝗢𝗗 𝗭𝗘𝗡𝗜𝗧𝗦𝗨🌀!",
  WORK_TYPE: process.env.WORK_TYPE || "public",
  DATABASE_URL: DATABASE_URL,
  DATABASE:
    DATABASE_URL === "./lib/database.db"
      ? new Sequelize({
          dialect: "sqlite",
          storage: DATABASE_URL,
          logging: false,
        })
      : new Sequelize(DATABASE_URL, {
          dialect: "postgres",
          ssl: true,
          protocol: "postgres",
          dialectOptions: {
            native: true,
            ssl: { require: true, rejectUnauthorized: false },
          },
          logging: false,
        }),
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || " ",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || " ",
  SUDO: process.env.SUDO || "0",
  IMGBB_KEY: ["76a050f031972d9f27e329d767dd988f", "deb80cd12ababea1c9b9a8ad6ce3fab2", "78c84c62b32a88e86daf87dd509a657a"],
};
