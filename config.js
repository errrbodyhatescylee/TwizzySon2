//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaqGmzIFsn0iKZkhUL2c";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaqGmzIFsn0iKZkhUL2c";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/mwkqs7.jpg";
global.devs = "27615045572";
global.sudo = process.env.SUDO || "27615045572";
global.owner = process.env.OWNER_NUMBER || "27630092157";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://files.catbox.moe/s7w9x7.jpg";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0F4UTNtcEllU2JYQXpvdzJuRGNhVEJYdmVLb0FPMHNIcG9mN25zdFQxdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQVc0ZlpmZDB6ck9zYVV0TVVJb2JQWHVKUXk0eVpUd2JZbkYvQjJXL2VpUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrQnlPclV0M1YwMnlhYWkrM2NINmhPNDlMaGlSUDlyZFpJT3dEWGtsbFhNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwczhUVE5DV2Zkb1BodGFJWDNRSHZzRENRT0F4VUpKM2ttR1RjZk12Q240PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZDN1cwS0wrY25RQ2t3eFh2QmxoMUlNZnV2ckEyTTltelJWWXptRXEvVVU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImpGRFZ2V01yR0dOWEZLUDd4Mzk5aWZTaUhhZkZJUU01YXRLZDl4Q2pBVFU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkFLVDd1WnIyT3hWTFJVOHFNSE5LQnp2eVYrTkhaS0QxS3RpemFFNW4wOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRU1UQmFIMWpEZmgxc2N4WDRGejdzVlY3cXlNb3NYUDI5c2JWdWcxNTczdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImcwUEtyL2lOMjMvem5wM01UODhVOEgwUklsTnFvRG9raW9STkVCT0lVaENOcFRpV29Bem1wRis0ZE8vcnZONGNsdUJKa3B1N1pWdmZjdjd0TnYxWkRBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MSwiYWR2U2VjcmV0S2V5IjoiaVdjMXBEV3ZnTHMvVUxpNDA3ZW8yTEVVNTAxeUlMR1BIV2phOE44aEFNaz0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOlt7ImtleSI6eyJyZW1vdGVKaWQiOiIyNzYzMDA5MjE1N0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJDQzAzQjQzNUFEOTE0MjdEMkE4QTU0MUI3NEFFREFFOCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzMxMDU5MTU2fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI1YlRjM25BclFBdTFxUEprejNXS1pnIiwicGhvbmVJZCI6IjQ3MjJkNzZlLWFjOTgtNDUxOS05YzA5LTJlMzJmNzViNzEwNyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNT08yckY2YmtwUVk3Q0pEWS9JU0tXSm9nOVE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiblNMdXVYM0dLQ0lUWi9VK1lNYjJYb21GeWZvPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkxWSksyQlZXIiwibWUiOnsiaWQiOiIyNzYzMDA5MjE1NzozQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKRGsvOWNCRU1LN3Q3a0dHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJoSzJBWjBHcDFNeEhISHovaEw0b1VXWEduN2FXakVwUGFoNmwzMVpxUVdBPSIsImFjY291bnRTaWduYXR1cmUiOiJRV213bVRyRHhPTWtLcDVtVERvTlJCSjJXNlNmNG9EbExYMEp5N2sxeWRoUnBmbVQ2NHFQWUNzQVAzczZQbE13eUpLVzB1eHpGRDNPdnJlbmxKQU1DQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiZm5VZERHWGxqclZlOG8rTC9aSmpTN1UzMkR3QWpYbnMvRGRIU20xMjdtM29SWjNOZ0lKUHdWNTdDd3NyQngrc0ZSN0lwMUt2R3RyZWQ5Kyt1YWVtQVE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNzYzMDA5MjE1NzozQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQllTdGdHZEJxZFRNUnh4OC80UytLRkZseHArMmxveEtUMm9lcGQ5V2FrRmcifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzEwNTkxNTEsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSUh4In0=" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "-",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`twizzyXchucky2.0 🦇🕸️❤️🧸™`",
  author: process.env.PACK_AUTHER || "Sir Cylee ❤️🧸",
  packname: process.env.PACK_NAME || "Sir Cylee ❤️🧸",
  botname: process.env.BOT_NAME || "Chucky 2.0",
  ownername: process.env.OWNER_NAME || "☆彡彡 𝚃𝚆𝙸𝚉𝚉𝚈'🦇 ミミ☆",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
