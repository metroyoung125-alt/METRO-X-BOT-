const os = require('os')
const moment = require('moment-timezone')

module.exports = {
    name: 'menu',
    desc: 'show all menu of METRO-X',
    run: async (sock, m, { pushname, from }) => {
        const totalCmd = Object.keys(global.plugins).length
        const used = process.memoryUsage()
        const uptime = process.uptime()
        const speed = (process.uptime() * 1000).toFixed(4)

        let menu = `┏▣ ◈ *${global.botname}* ◈\n`
        menu += `┃ *ᴏᴡɴᴇʀ* : ${global.ownername}\n`
        menu += `┃ *ᴘʀᴇғɪx* : [ ${global.prefix} ]\n`
        menu += `┃ *ʜᴏsᴛ* : Koyeb\n`
        menu += `┃ *ᴘʟᴜɢɪɴs* : ${totalCmd}\n`
        menu += `┃ *ᴍᴏᴅᴇ* : Public\n`
        menu += `┃ *ᴠᴇʀsɪᴏɴ* : ${global.version}\n`
        menu += `┃ *sᴘᴇᴇᴅ* : ${speed} ms\n`
        menu += `┃ *ᴜsᴀɢᴇ* : ${(used.rss / 1024 / 1024).toFixed(0)} MB\n`
        menu += `┃ *ʀᴀᴍ:* [███░░░░░░░] 27%\n`
        menu += `┗▣ \n\n`

        menu += `┏▣ ◈ *AI MENU* ◈\n│➽ analyze\n│➽ blackbox\n│➽ code\n│➽ dalle\n│➽ deepseek\n│➽ doppleai\n│➽ gemini\n│➽ generate\n│➽ gpt\n│➽ programming\n│➽ recipe\n│➽ story\n│➽ summarize\n│➽ teach\n│➽ translate2\n┗▣ \n\n`
        menu += `┏▣ ◈ *AUDIO MENU* ◈\n│➽ bass\n│➽ blown\n│➽ deep\n│➽ earrape\n│➽ reverse\n│➽ robot\n│➽ tomp3\n│➽ toptt\n│➽ volaudio\n┗▣ \n\n`
        menu += `┏▣ ◈ *DOWNLOAD MENU* ◈\n│➽ apk\n│➽ download\n│➽ facebook\n│➽ gdrive\n│➽ gitclone\n│➽ image\n│➽ instagram\n│➽ itunes\n│➽ mediafire\n│➽ pin\n│➽ savestatus\n│➽ song\n│➽ song2\n│➽ telesticker\n│➽ tiktok\n│➽ tiktokaudio\n│➽ twitter\n│➽ video\n│➽ videodoc\n│➽ xvideo\n┗▣ \n\n`
        menu += `┏▣ ◈ *EPHOTO360 MENU* ◈\n│➽ 1917style\n│➽ advancedglow\n│➽ blackpinklogo\n│➽ blackpinkstyle\n│➽ cartoonstyle\n│➽ deletingtext\n│➽ dragonball\n│➽ effectclouds\n│➽ flag3dtext\n│➽ flagtext\n│➽ freecreate\n│➽ galaxystyle\n│➽ galaxywallpaper\n│➽ glitchtext\n│➽ glowingtext\n│➽ gradienttext\n│➽ graffiti\n│➽ incandescent\n│➽ lighteffects\n│➽ logomaker\n│➽ luxurygold\n│➽ makingneon\n│➽ matrix\n│➽ multicoloredneon\n│➽ neonglitch\n│➽ papercutstyle\n│➽ pixelglitch\n│➽ royaltext\n│➽ sand\n│➽ summerbeach\n│➽ topography\n│➽ typography\n│➽ watercolortext\n│➽ writetext\n┗▣ \n\n`
        menu += `┏▣ ◈ *FUN MENU* ◈\n│➽ fact\n│➽ jokes\n│➽ memes\n│➽ quotes\n│➽ trivia\n│➽ truthdetector\n│➽ xxqc\n┗▣ \n\n`
        menu += `┏▣ ◈ *GAMES MENU* ◈\n│➽ dare\n│➽ truth\n│➽ truthordare\n┗▣ \n\n`
        menu += `┏▣ ◈ *GROUP MENU* ◈\n│➽ add\n│➽ addcode\n│➽ allow\n│➽ announcements\n│➽ antibadword\n│➽ antibot\n│➽ antidemote\n│➽ antiforeign\n│➽ antigroupmention\n│➽ antilink\n│➽ antilinkgc\n│➽ antisticker\n│➽ antitag\n│➽ antitagadmin\n│➽ approve\n│➽ approveall\n│➽ cancelkick\n│➽ close\n│➽ closetime\n│➽ delallowed\n│➽ delcode\n│➽ delppgroup\n│➽ demote\n│➽ disapproveall\n│➽ editsettings\n│➽ getgrouppp\n│➽ hidetag\n│➽ invite\n│➽ kick\n│➽ kickall\n│➽ kickinactive\n│➽ link\n│➽ listactive\n│➽ listallowed\n│➽ listcode\n│➽ listinactive\n│➽ listrequests\n│➽ mediatag\n│➽ open\n│➽ opentime\n│➽ poll\n│➽ promote\n│➽ reject\n│➽ resetlink\n│➽ setdesc\n│➽ setgroupname\n│➽ setppgroup\n│➽ tag\n│➽ tagadmin\n│➽ tagall\n│➽ totalmembers\n│➽ userid\n│➽ vcf\n│➽ welcome\n┗▣ \n\n`
        menu += `┏▣ ◈ *GROUPSTATUS MENU* ◈\n│➽ tosgroup\n┗▣ \n\n`
        menu += `┏▣ ◈ *IMAGE MENU* ◈\n│➽ remini\n│➽ wallpaper\n┗▣ \n\n`
        menu += `┏▣ ◈ *OTHER MENU* ◈\n│➽ botstatus\n│➽ pair\n│➽ ping\n│➽ ping2\n│➽ repo\n│➽ runtime\n│➽ time\n┗▣ \n\n`
        menu += `┏▣ ◈ *OWNER MENU* ◈\n│➽ autosavestatus\n│➽ aza\n│➽ block\n│➽ delete\n│➽ deljunk\n│➽ delstickercmd\n│➽ disk\n│➽ dlvo\n│➽ gcaddprivacy\n│➽ groupid\n│➽ hostip\n│➽ join\n│➽ lastseen\n│➽ leave\n│➽ listbadword\n│➽ listblocked\n│➽ listignorelist\n│➽ listsudo\n│➽ modestatus\n│➽ online\n│➽ owner\n│➽ ppprivacy\n│➽ react\n│➽ readreceipts\n│➽ resetaza\n│➽ restart\n│➽ setaza\n│➽ setbio\n│➽ setprofilepic\n│➽ setstickercmd\n│➽ tostatus\n│➽ toviewonce\n│➽ unblock\n│➽ unblockall\n│➽ update\n│➽ vv2\n│➽ warn\n┗▣ \n\n`
        menu += `┏▣ ◈ *RELIGION MENU* ◈\n│➽ bible\n│➽ quran\n┗▣ \n\n`
        menu += `┏▣ ◈ *SEARCH MENU* ◈\n│➽ define\n│➽ define2\n│➽ imdb\n│➽ lyrics\n│➽ shazam\n│➽ weather\n│➽ yts\n┗▣ \n\n`
        menu += `┏▣ ◈ *SETTINGS MENU* ◈\n│➽ addbadword\n│➽ addcountrycode\n│➽ addignorelist\n│➽ addsudo\n│➽ alwaysonline\n│➽ antibug\n│➽ anticall\n│➽ antidelete\n│➽ antideletestatus\n│➽ antiedit\n│➽ antiviewonce\n│➽ autobio\n│➽ autoblock\n│➽ autoreact\n│➽ autoreactstatus\n│➽ autoread\n│➽ autorecord\n│➽ autorecordtyping\n│➽ autotype\n│➽ autoviewstatus\n│➽ chatbot\n│➽ delanticallmsg\n│➽ delcountrycode\n│➽ deletebadword\n│➽ delgoodbye\n│➽ delignorelist\n│➽ delsudo\n│➽ delwelcome\n│➽ getsettings\n│➽ listcountrycode\n│➽ listwarn\n│➽ mode\n│➽ resetsetting\n│➽ resetwarn\n│➽ setanticallmsg\n│➽ setbotname\n│➽ setcontextlink\n│➽ setfont\n│➽ setgoodbye\n│➽ setmenu\n│➽ setmenuimage\n│➽ setownername\n│➽ setownernumber\n│➽ setprefix\n│➽ setstatusemoji\n│➽ setstickerauthor\n│➽ setstickerpackname\n│➽ settimezone\n│➽ setwarn\n│➽ setwatermark\n│➽ setwelcome\n│➽ showanticallmsg\n│➽ showgoodbye\n│➽ showwelcome\n│➽ statusdelay\n│➽ statussettings\n│➽ testanticallmsg\n│➽ testgoodbye\n│➽ testwelcome\n┗▣ \n\n`
        menu += `┏▣ ◈ *SPORTS MENU* ◈\n│➽ bundesligamatches\n│➽ bundesligascorers\n│➽ bundesligastandings\n│➽ bundesligaupcoming\n│➽ clmatches\n│➽ clscorers\n│➽ clstandings\n│➽ clupcoming\n│➽ eflmatches\n│➽ eflscorers\n│➽ eflstandings\n│➽ eflupcoming\n│➽ elmatches\n│➽ elscorers\n│➽ elstandings\n│➽ elupcoming\n│➽ eplmatches\n│➽ eplscorers\n│➽ eplstandings\n│➽ eplupcoming\n│➽ laligamatches\n│➽ laligascorers\n│➽ laligastandings\n│➽ laligaupcoming\n│➽ ligue1matches\n│➽ ligue1scorers\n│➽ ligue1standings\n│➽ ligue1upcoming\n│➽ serieamatches\n│➽ serieascorers\n│➽ serieastandings\n│➽ serieaupcoming\n│➽ wcmatches\n│➽ wcscorers\n│➽ wcstandings\n│➽ wcupcoming\n│➽ wrestlingevents\n│➽ wwenews\n│➽ wweschedule\n┗▣ \n\n`
        menu += `┏▣ ◈ *SUPPORT MENU* ◈\n│➽ feedback\n│➽ helpers\n┗▣ \n\n`
        menu += `┏▣ ◈ *TOOLS MENU* ◈\n│➽ browse\n│➽ calculate\n│➽ device\n│➽ emojimix\n│➽ fancy\n│➽ filtervcf\n│➽ fliptext\n│➽ genpass\n│➽ getabout\n│➽ getpp\n│➽ gsmarena\n│➽ obfuscate\n│➽ qrcode\n│➽ runeval\n│➽ say\n│➽ ssweb\n│➽ sswebpc\n│➽ sswebtab\n│➽ sticker\n│➽ take\n│➽ texttopdf\n│➽ tinyurl\n│➽ toimage\n│➽ tourl\n│➽ vcc\n┗▣ \n\n`
        menu += `┏▣ ◈ *TRANSLATE MENU* ◈\n│➽ translate\n┗▣ \n\n`
        menu += `┏▣ ◈ *VIDEO MENU* ◈\n│➽ toaudio\n│➽ tovideo\n│➽ volvideo\n┗▣ \n\n`
        menu += `_${global.footer}_`

        await sock.sendMessage(from, { text: menu }, { quoted: m })
    }
          }
