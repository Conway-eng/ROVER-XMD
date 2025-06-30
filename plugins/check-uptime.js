const { cmd } = require('../command');
const { runtime } = require('../lib/functions');
const config = require('../config');

cmd({
    pattern: "uptime",
    alias: ["runtime", "up"],
    desc: "Show bot uptime with stylish formats",
    category: "main",
    react: "⏱️",
    filename: __filename
},
async (conn, mek, m, { from, reply }) => {
    try {
        const uptime = runtime(process.uptime());
        const startTime = new Date(Date.now() - process.uptime() * 1000);
        
        
        // Style 1: Retro Terminal
        const style1 = `╔══════════════════════╗
║   ROVER-XMD UPTIME    
╠══════════════════════
║  RUNTIME: ${uptime}
║  SINCE: ${startTime.toLocaleString()}
╚══════════════════════╝

> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ HACKLINK TECH.INC*`;


        const styles = [style1];
        const selectedStyle = styles[Math.floor(Math.random() * styles.length)];

        await conn.sendMessage(from, { 
            text: selectedStyle,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363401087525436@newsletter',
                    newsletterName: config.OWNER_NAME || 'HACKLINK TECH.INC',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (e) {
        console.error("Uptime Error:", e);
        reply(`❌ Error: ${e.message}`);
    }
});
