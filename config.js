//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://f.uguu.se/EtEVHzHr.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "2348023898600";
global.owner = process.env.OWNER_NUMBER || "2348023898600";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUl2d2owSWJlWk9rSUlCUCtORDM3aWZmTUFtWC9zYUNzNjh2T1dmbjQzQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEp2QTN5eHM2cHdRbkRSVW1qWG9pd1F5V0NKRnhtVG91RzlWUjYrTWJ3az0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjRStqeU4zd1RXWWIyU0pMZTV6Y3FDdG50eEtjZkhwOVIvaEp5bkh2MDFvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQTlcvUHJBUHlROEpJYjlDeVg5L3FabW9WQTFGSkZGTVViQmtzSVBCWHk0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFMSk4xYS85OW9UOTRmV1lmVENVcTlTaVBQbEFmQXBHbmVCMXJsRFV4V0U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZaWEtzK0Ixbnd1S1RQODlLSG1wYUl0MTV4NGRzd0FGaXJ2VGZvYWZVMEU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0NmUUZaQ1R0RWc0UFdSVVFnVFUrWGhNTmRXUHk2R2pzZGFkNSswSmJHWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK1dJNXU0RWhwT3RhRXBjWC9XYUF1WW5MYXN2dlJURURvM0QyZEhTR0RTZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im52NnVHU0RlRnVla1oyMU83dHFZQlhUaEtIa1Q1ZGJYamp0cExxM25RWmxSMFlZTXNFSDdTQ1NKOWVlMlQ2djdZV0Y0bHN3NjhOakhpbE1qWm92N2lBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQ0LCJhZHZTZWNyZXRLZXkiOiJpbjdlc2JwMW03M1RUSDI4MnhjYXIrTWlEZVg4OCtwcGJCYUw1b1ZYd0VvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJtRGh6NHhCMlNpLUFkSVRQZ1Q3YkVnIiwicGhvbmVJZCI6ImZjYzBkMzUxLWJlYzYtNDRmZS04MjBkLTgwMjk4ZmI2YzRiZCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVNnFpbkNRNWJpTUZ5UWREVHFjRkFKS2J6Q0E9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidDlnZk5GeGNRcU5ya09EbHdJM1ZZVDlIVWhzPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlFZTlM1TDhZIiwibWUiOnsiaWQiOiIyMzQ4MDIzODk4NjAwOjk2QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNORzQ0Y1VFRU1EbmlyY0dHQVlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJOVDBweTVzdkVSVUZXdDA3d3pvNURXUlVXSlppWm9CY2dpQkZJZEdZeHk0PSIsImFjY291bnRTaWduYXR1cmUiOiJJS0IxbC9pVkpKZnVrT1QvZHpzcnUvRkFRVXJOVkJIZkp6cDAvNCtUbnFPWk1USWZET2pNWVZNOVJRc1JiL2xqN1pPQmxoZi9xU1lqNVNXbFJqSXdEUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoibHpiaHNWeWVySVR2VTdLa2hLYk1NS01ZUndQV2ZFVXFXU3JtSm5JMXZMWUxINnkydGx2eWZ1ZFhsMm9ydk4xaVdPbUNGSEdWamRrZDQ0UUF2ZnlJaVE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ4MDIzODk4NjAwOjk2QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlRVOUtjdWJMeEVWQlZyZE84TTZPUTFrVkZpV1ltYUFYSUlnUlNIUm1NY3UifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjYxMzMxOTcsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQXAxIn0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "!",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "꧁༒༻☬ད ᏦᏆᑎᏀ ᏦᕼᗩしᏆᗞ ཌ☬༺༒꧂-V2™`",
  author: process.env.PACK_AUTHER || "¸„.-•~¹°”ˆ˜¨ ᏦᏆᑎᏀ ᏦᕼᗩしᏆᗞ ¨˜ˆ”°¹~•-.„¸",
  packname: process.env.PACK_NAME || "ᏦᏆᑎᏀ ᏦᕼᗩしᏆ",
  botname: process.env.BOT_NAME || "ᏦᏆᑎᏀ ᏦᕼᗩしᏆᗞ",
  ownername: process.env.OWNER_NAME || "ᏆᑎᏀ ᏦᕼᗩしᏆᗞl",
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
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
