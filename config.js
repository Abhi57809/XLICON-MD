const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "917894233125"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://salmanahmad:s4salmanyt@cluster0.szcj2eo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'xheikhsalman4422@gmail.com'
global.github = 'https://github.com/salmanytofficial/XLICON-MD'
global.location = 'INDIA'
global.gurl = 'https://instagram.com/itz_shaikho/' // add your username
global.sudo = process.env.SUDO || '917894233125' 
global.devs = '917894233125';
global.website = 'https://github.com/salmanytofficial/XLICON-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3c341828d86ee7a89c73f.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  " XLICON-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaVBIUXcyU3ExaGhHbW13cGQ4M0hTWWVnV1FvZHVWQlBtdUtJMnBYNTZraz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMjl5aTJ5S0REZ0UyWlJ1QUw4UVdMOGpPVTlRSTFhdEwwbTZQdHkwbXZSbz0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRSG5sY1lXQXBTQjRtS2Vkd1pzSFg5ZXBxRUh2d1l2cmVWVGkvVk1mTlh3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKMHdhb3ZHUm1NV2Qxc0xLU0F2dHhDdEZnWWJOTXR4RDJJMlAwUWU3WFhrPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktJWGR5YTRGUm1GTUNOTFAzdVN6MUVMbDduMXNVL3VHU0diU2ozRVNjWGM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imh1R21yNXpISzFmTlg5Vk43QWlJbXVoeHV3S3ZhVCtZNElVaFhCemkzaGs9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0eGpJQmJvdCt0ZjNISytFZnoxbVppUjFzVndtSmZ6NGxwU3VMUzFidVNaekNCNjVsV3ExamlKN2VzMnBudzc5ZmpuOFR0U24yTWZmNEllTENBRzJBQT09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjIxLCJhZHZTZWNyZXRLZXkiOiJobHJSenRxVHJEcjBDOVZsYVA1dDQzTnM0ZFhZZDhOZFJ4bnFtUHloY2pVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJWQnIwRkxHWFNqUzRyNjVUcXFVa29BIiwicGhvbmVJZCI6IjZjNzVjOGM2LWM4ZjctNDY2MS1iOWEwLTcxYzhmYTEzMTkwNSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrY1B5UzdESjROSmRuMWx3Tks1R1RBNm80bGc9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZCZlhIQ3Y1VS9Ebm9vb2hSaitFN3Y0OVh2ST0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0pHc2o5QUVFSlB0bktzR0dBRT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiamxMMVRKSzZsdy9vYjJLMDJuQjFSYUlGREt2OUUzMUQyOCtNazhYRnVRRT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiRUpDYkFaZGg2a1J6UjBaK096SGRSRlRBYnhEclNRQVNaU3RWbXpNVll1OUJWR2E2UGtoSXNBRXRhM0paWUlZa0M1TkZMRTdNMExkOGVMOGtBTFV6QUE9PSIsImRldmljZVNpZ25hdHVyZSI6ImhYYyt0aURteTJDVXcwWjdnSGRQanJmUjNrZXIwYThDQzFrNURPNStaWDZCQXMreVlKSGpIcGhuUkRocVJWS0tLOE1BdnplZDdnekxlc3pHbmRTT0NBPT0ifSwibWUiOnsiaWQiOiI5MTc4OTQyMzMxMjU6NTVAcy53aGF0c2FwcC5uZXQifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTE3ODk0MjMzMTI1OjU1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlk1UzlVeVN1cGNQNkc5aXROcHdkVVdpQlF5ci9STjlROXZQakpQRnhia0IifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MDEyNjI5OTd9",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  'Luffy',
  packname:  process.env.PACK_NAME || 'Luffy',
   
  botname:   process.env.BOT_NAME === undefined ? "LUFFY-SHAVI" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'LUFFY-SHAVI' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? true : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? 'IM ALIVE BITCH😡' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
