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

 //==================================================




const { cmd } = require('../command');
const os = require('os');

cmd({
    pattern: "alive",
    react: "💡",
    desc: "Afficher les informations du bot et votre nom SLG",
    category: "other",
    use: '.alive',
    filename: __filename
},
async (conn, mek, m, { from, reply }) => {
    try {
        // Obtenir les informations sur le système d'exploitation
        const osInfo = `${os.type()} ${os.release()}`;

        // Votre nom SLG
        const yourName = "Votre nom SLG";

        // Envoyer les informations du bot et votre nom SLG
        return await conn.sendMessage(from, `
            *Informations du Bot*:
            - Système d'exploitation: ${osInfo}
            - Créateur du Bot: ${yourName}
        `, { quoted: mek });
    } catch (e) {
        reply('*Erreur lors de l\'exécution de la commande alive!*');
        console.log(e);
    }
});