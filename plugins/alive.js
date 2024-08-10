const {
    cmd,
    commands
} = require('../command')
cmd({
        pattern: "test",
        react: "📟",
        filename: __filename
    },
    async (conn, mek, m, {
        from,
        reply
    }) => {
        try { reply(salut)
               } catch (e) {
            reply('*Error !!*')
            console.log(e)
        }
    })

 
