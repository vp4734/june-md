const fs = require('fs')
const chalk = require('chalk')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


global.SESSION_ID = process.env.SESSION_ID || 'trashcore~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0xpcmNrZGszNWIzczQveCtOMWJyWmQ4akFEYkRacC9WMTNPeXZTTUJWMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTHdndlFlOTZOa0svV0tmcnlURS9IOE5LSVRTMU9ZcjdKVFkyYUZGRkZuVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5Ri8rMkRiNWUvWThNcFI0ZzcwSkUzangyQW5BRXM5dHVFY1ZSZ2JIcGtnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI1RGZLYXRDUTBTdnpRanVYUDhWN0tyN1c2MjdoQ0F3YmNzNkdaSTVmUTI4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9HRk5GNDZxTzNJMzdLVnJpQkFqK2RTRnlwWUc3bFFwdWRSa1hZOFZVR0k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkQ4clpYdUVOaGZNVFdybnZuNFRFcDYwalFwSmpVQ2dJc2NxZlk3Z1pBSFk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkNOanB2MzRKblVyL0xRQmNnTlE4S0pzM2doaHhQNW8vSEV5QndXdlYxYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRU5OQ2k1dk9xaEtvbnpmU3MzZTVLTEVnOGkvRjFTb3dHdVBUUUwzMVdHbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZaR0ZUQ01nazkzbTUzb0ZPR2R4K2lKUGsrcDJWSk5xZTh5bGNZOUVHQkVrR0hOY0ZKVUluYllHQUE0b0UwSmhFWHpKMkpXbUhFTjZHTDJEQzV0aGlRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTc5LCJhZHZTZWNyZXRLZXkiOiJkVnVacE5Xd3RIVWx1M3hZWTVNMy9aaVhHWk5LOW9UbzZCMnNCU1ZXUm5NPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJyeWxEU1ZsblFhS3czMmMxcUhSOUlRIiwicGhvbmVJZCI6ImY0YTc1YmY3LThkMjgtNGJiZi05Njk3LTBkY2RhNDVmMGM3NyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI3VzJVM0E1U0h6MnBQbFVUejhCMUxDMGhnOTA9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM1F3aHRnakIwc3hKdnhXZU1qbTF3V0tXeUtvPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlRSQVNIQk9UIiwibWUiOnsiaWQiOiIyNTQ3OTIwMjE5NDQ6NzFAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIyNzI0NzMyNzg5NDc1MTU6NzFAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLYjR5THNERUtuTTk4UUdHQVFnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJKSlNrbXJWNFpZQWdUUnFCRFlUOGpIYmh4UUtPODRCeXpsMytKVFdRS25nPSIsImFjY291bnRTaWduYXR1cmUiOiJ5VUd4ZkdGOEVKV21XSER4aVFHbmhJMVpKb1g3UEhBQnpNVVRrQUg3RW1ISjJnalJuSmdhU1hCdnJvdnIxTGx4aGk2SUNSTE9lTWFPL1djazdtaEFEUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiRXJrQ2RJSFJLbGdHdW9Gd1ExbktuRFpnVE41UGdwWEc4aVhLUjZjRHR0RW9wejBJaFcwN0tQd1pDZ0lQSUhISHZGaVZ1ZnZYNmhYY0pEUTU4QkFPaEE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTQ3OTIwMjE5NDQ6NzFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCU1NVcEpxMWVHV0FJRTBhZ1EyRS9JeDI0Y1VDanZPQWNzNWQvaVUxa0NwNCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0JJSUFnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU1MTc4NTUwLCJsYXN0UHJvcEhhc2giOiJQV2s1QiIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSm5UIn0='

//~~~~~~~~~~~ Settings Owner ~~~~~~~~~~~//
global.owner = "254756280512"
global.developer = "254756280512"
global.bot = ""
global.devname = "Supreme"
global.ownername = "Supreme"
global.botname = "June Md"
global.versisc = "2"
global.packname = "⎋June Md"
//~~~~~~~~~~~ Settings Sosmed ~~~~~~~~~~~//
global.linkwa = "https://wa.me/254756280512"
global.linkyt = "https://www.youtube.com/supreme"
global.linktt = "https://tiktok.com"
global.linktele = "https://t.me"

//~~~~~~~~~~~ Settings Bot ~~~~~~~~~~~//
global.prefix = ["","!",".",",","#","/","🎭","〽️"]
global.autoRecording = false
global.autoTyping = true
global.autorecordtype = false
global.autoread = true
global.autobio = false
global.anti92 = false
global.owneroff = false
global.autoswview = true

//~~~~~~~~~~~ Settings Thumbnail ~~~~~~~~~~~//
global.thumbbot = "https://url.bwmxmd.online/Adams.poh4tuhs.jpg"
global.thumbown = "https://url.bwmxmd.online/Adams.poh4tuhs.jpg"

//~~~~~~~~~~~ Settings Channel ~~~~~~~~~~~//
global.idchannel = "120363402785346228@newsletter*"
global.channelname = "ーJUNE MD UPDATES"
global.channel = "hatsapp.com/channel/0029Vb2W2vAADTOKmdoDxB0m"

//~~~~~~~~~~~ Settings Message ~~~~~~~~~~~//
global.mess = {
  developer: "Developer Only!,🉐This feature is for developers only!!",
  owner: "Owner Only!,🌌This feature is for owners only!!",
  group: "Group Only!,This feature is for group chats only!!",
  private: "Private Only!,This feature is for private chats only!!",
  admin: "Admin Only!,This feature is for admins only!!",
  botadmin: "Bot Admin Only!⚙️,This feature is for bot admins only!!",
  wait: "Please wait🔄, loading...",
  error: "Error!,An error occurred!!",
  done: "Done!✅Process completed!!"
}

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
