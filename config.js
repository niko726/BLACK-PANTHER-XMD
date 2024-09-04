//GIFTED-MD//
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "ngoyaibraah@gmail.com";
global.location = "Bumgoma,Kenya";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://giftedte:SER3spXjIJSOwrPT@cluster0.ni61idp.mongodb.net/?retryWrites=true&w=majority";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgres://giftedtech:ZMIkfrL3rHsvmfyGboVXKkeyoM0FPl6z@dpg-cpp83jlds78s73e39m10-a.oregon-postgres.render.com/giftedtech";
global.BUTTONS = process.env.BUTTON_MODE || "1";
global.timezone = process.env.TIME_ZONE || process.env.TIME_ZONE || "Africa/Nairobi";
global.github = process.env.GITHUB || "https://github.com/ibrahimaitech/BLACK-PANTHER-XMD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaZuGSxEawdxZK9CzM0Y";
global.website = process.env.GURL || "https://youtube.com/@ibrahimaitech";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/c5b2b527a08a0b21392e0.jpg";
global.devs = "94704020146";
global.sudo = process.env.SUDO_NUMBERS || "94704020146";
global.sudo = process.env.SUDO || "94704020146";
global.owner = process.env.OWNER_NUMBER || "94704020146";
global.style = process.env.STYLE || "1";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 5;
global.disablepm = process.env.DISABLE_PM || "true";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.MENU_VIDEOS || "";
global.waPresence = process.env.WAPRESENCE || "available";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/9e038e5890def3cc7aca7.jpg";
global.readcmds = process.env.READ_COMMAND || "true";eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUtEeWM3VmloUWZSUyswbmp5b0tsU1gxSVJOd243cS9wbE1kRmJkVVptOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZVZpanVCaStsTUV1aVFDeTBEUFdKV3Z6VWhvdmxnTWJxcC9uMjZRS2JVST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhTWwxOFNJaHNBUll6RXk0RzM2OG1nY1N0SkVZMDNBeFpzMWVKdlp4MkZBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrVVFPOVg3TG04ekdzSUJHM2sydTEvL1pOSDVzK0d3ckJXbncyaHhkb0ZvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNJSVAwaDJNU202blYwUUtKR1diVVNMbmo5NDI2S2ozMFJoMjk2U0hsMmc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Iit3cTRvNWFuVVJYNHFCMGQxbi91dXJoVVNzRmNoMXpEaUdPQVR2aUZFV0U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUtxY3BWQkVmcVpHVHRhU3JrV3BaaG4yYWV2UjVWMkJIdlJaTmJXUVhVRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV3VLOTFJcUx6RnlrejR6cHRYUlVFdWVvSE9razFYT2JUTnlCc2RsdTdWRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkcxbjRnNUZ6NGh5OEhtOGZvRUw0dHc5eEVjQ1JodCtVTFFpcWIzdkRaRWg5dHpvdU1ZMXpub2F4THdmci9KV3B3QWsvS1lVSmZEU2RBRkx4OHZVdERnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTYzLCJhZHZTZWNyZXRLZXkiOiI0RXBVZFh4TDAwTDErMW0zV0RVN3ZHMG8rM0FZYTh3Q2V0MitIV1gxRnBJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MjE0LCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MjE0LCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlhxY1FJWU40U3d1cnBVdFgxUXRyNkEiLCJwaG9uZUlkIjoiZmFiYWFiODctY2FhNy00YWNhLWI4YWYtYjY3OGY3N2IxNTJmIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJ5OWF4Ti9GeGRVVys1eU54NWZkRlVGWW5BUT0ifSwicmVnaXN0ZXJlZCI6ZmFsc2UsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidzlPYWVSNFJPSzc2cjBnQUN2Qi9yREdwNE1JPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDT2lDbStvRUVMaUQzTFlHR0NrZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoicVRiY01hZE1wdys5ZFA5S0szUm5qWkpPbDhib1NvaTdud3lYbUhvdUVqRT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiZjU3T3JNcS9RNFNZdm9id2RXN0lEU21vK1VYU1JYTTd6MDZ3NGFVT2tyZ2ViTWMzWC9ncXNFd2FJNUQ2WlVXaGlRZWR1bXNJR0UvY1hKT3VuTFF1QlE9PSIsImRldmljZVNpZ25hdHVyZSI6Ik9QS1ZLTjZnNDM2dlJrSjZHSDZudzJQUjRRaGJzU2pHYmtKcFZJRHp0Q0hoV0VScWtLVUNDZmoxcmN4cjV3ZTJNRUM1Zm5Td0VsY3RWYVIySDEvbkNRPT0ifSwibWUiOnsiaWQiOiI5NDcwNDAyMDE0Njo4QHMud2hhdHNhcHAubmV0IiwibmFtZSI6Is63zrnQus+DIM+BzrHQvM650YPOsSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDcwNDAyMDE0Njo4QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmFrMjNER25US2NQdlhUL1NpdDBaNDJTVHBmRzZFcUl1NThNbDVoNkxoSXgifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjUzNjcwMjksIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBT2JFIn0="
module.exports = {
  menu: process.env.MENU_STYLE || "G1", /*Leave it in Default else bot will Crash*/
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "4.0.0",
  caption: process.env.CAPTION ||" 𝘽𝙇𝘼𝘾𝙆-𝙋𝘼𝙉𝙏𝙃𝙀𝙍-𝙈𝘿",
  author: process.env.STICKER_AUTHOR || "𝘽𝙇𝘼𝘾𝙆-𝙋𝘼𝙉𝙏𝙃𝙀𝙍-𝙈𝘿",
  packname: process.env.STICKER_NAME || "🐯",
  botname: process.env.BOT_NAME || "𝘽𝙇𝘼𝘾𝙆-𝙋𝘼𝙉𝙏𝙃𝙀𝙍-𝙈𝘿",
  ownername: process.env.OWNER_NAME || "𝑰𝒃𝒓𝒂𝒉𝒊𝒎 𝑨𝒅𝒂𝒎𝒔",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "ADAM").toUpperCase(),
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


