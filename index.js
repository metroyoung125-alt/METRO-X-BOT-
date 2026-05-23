const { default: makeWASocket, useMultiFileAuthState, DisconnectReason } = require("@whiskeysockets/baileys")
const pino = require('pino')
const qrcode = require('qrcode-terminal')
const fs = require('fs')
const path = require('path')
const moment = require('moment-timezone')
const os = require('os')

// ===== BADILISHA HIZI KUWA ZAKO =====
global.owner = ['254784275366'] // 
global.botname = 'METRO-X'
global.ownername = 'metro young' // 
global.prefix = '.'
global.footer = '© METRO-X 2026'
global.version = '1.0.0'
// ====================================

async function startBot() {
    const { state, saveCreds } = await useMultiFileAuthState('session')
    const sock = makeWASocket({
        auth: state,
        printQRInTerminal: false,
        logger: pino({ level: 'silent' }),
        browser: ['METRO-X', 'Chrome', '1.0.0']
    })

    sock.ev.on('creds.update', saveCreds)

    sock.ev.on('connection.update', (update) => {
        const { connection, lastDisconnect, qr } = update
        if(qr) {
            console.log('--- SCAN QR YA METRO-X ---')
            qrcode.generate(qr, {small: true})
        }
        if(connection === 'close') {
            const shouldReconnect = lastDisconnect?.error?.output?.statusCode!== DisconnectReason.loggedOut
            if(shouldReconnect) startBot()
        } else if(connection === 'open') {
            console.log('METRO-X BOT IMEUNGANISHWA ✅')
        }
    })

    // LOAD COMMANDS ZOTE 327
    global.plugins = {}
    const pluginDir = path.join(__dirname, 'commands')
    if (!fs.existsSync(pluginDir)) fs.mkdirSync(pluginDir, { recursive: true })

    const loadPlugins = () => {
        fs.readdirSync(pluginDir).forEach(file => {
            if (file.endsWith('.js')) {
                delete require.cache[require.resolve(path.join(pluginDir, file))]
                try {
                    const plugin = require(path.join(pluginDir, file))
                    global.plugins[plugin.name] = plugin
                } catch (e) {
                    console.log(`Error loading ${file}:`, e)
                }
            }
        })
        console.log(`[METRO-X] Loaded ${Object.keys(global.plugins).length} commands`)
    }
    loadPlugins()

    sock.ev.on('messages.upsert', async (m) => {
        try {
            const msg = m.messages[0]
            if (!msg.message || msg.key.fromMe) return
            const from = msg.key.remoteJid
            const type = Object.keys(msg.message)[0]
            const body = (type === 'conversation')? msg.message.conversation :
                        (type === 'extendedTextMessage')? msg.message.extendedTextMessage.text :
                        (type === 'imageMessage')? msg.message.imageMessage.caption :
                        (type === 'videoMessage')? msg.message.videoMessage.caption : ''

            const isCmd = body.startsWith(global.prefix)
            if (!isCmd) return

            const args = body.slice(global.prefix.length).trim().split(/ +/)
            const command = args.shift().toLowerCase()
            const q = args.join(' ')
            const pushname = msg.pushName || 'User'

            const cmd = global.plugins[command]
            if (cmd) {
                await cmd.run(sock, msg, { args, q, pushname, from, command })
            }
        } catch (e) {
            console.log(e)
        }
    })
}
startBot()
