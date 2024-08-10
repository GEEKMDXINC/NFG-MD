const config = require('../config')
const os = require('os')
const {
    cmd,
    commands
} = require('../command')
const {
    getBuffer,
    getGroupAdmins,
    getRandom,
    h2k,
    isUrl,
    Json,
    runtime,
    sleep,
    fetchJson
} = require('../lib/functions')

cmd({
        pattern: "ping",
        react: "📟",
        alias: ["speed"],
        desc: "Check bot\'s ping",
        category: "other",
        use: '.ping',
        filename: __filename
    },
    async (conn, mek, m, {
        from,
        reply
    }) => {
        try {
            let inital = new Date().getTime();
            let ping = await conn.sendMessage(from, {
                text: '```Pinging To index.js!!!```'
            }, {
                quoted: mek
            })
            let final = new Date().getTime();
            return await conn.edit(ping, '*Pong*\n *' + (final - inital) + ' ms* ')
        } catch (e) {
            reply('*Error !!*')
            console.log(e)
        }
    })

 //================================================

const {
    cmd
} = require('../command');
const {
    runtime
} = require('../lib/functions');

cmd({
    pattern: "uptime",
    react: "⏱️",
    desc: "Check bot's uptime",
    category: "other",
    use: '.uptime',
    filename: __filename
},
async (conn, mek, m, {
    from,
    reply
}) => {
    try {
        let totalSeconds = runtime();
        let days = Math.floor(totalSeconds / 86400);
        let hours = Math.floor((totalSeconds % 86400) / 3600);
        let minutes = Math.floor((totalSeconds % 3600) / 60);
        let seconds = Math.floor(totalSeconds % 60);

        let uptimeMsg = `*Uptime*: ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;

        return await conn.sendMessage(from, {
            text: uptimeMsg
        }, {
            quoted: mek
        });
    } catch (e) {
        reply('*Error !!*');
        console.log(e);
    }
});