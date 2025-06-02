const axios = require("axios");
const { cmd } = require("../command");

cmd({
  pattern: "fancy",
  alias: ["font", "style"],
  react: "✍️",
  desc: "Convert text into various fonts.",
  category: "tools",
  filename: __filename
}, async (conn, m, store, { from, quoted, args, q, reply }) => {
  try {
    if (!q) {
      return reply("❎ Please provide text to convert into fancy fonts.\n\n*Example:* .fancy Hello");
    }

    const apiUrl = `https://www.dark-yasiya-api.site/other/font?text=${encodeURIComponent(q)}`;
    const response = await axios.get(apiUrl);
    
    if (!response.data.status) {
      return reply("❌ Error fetching fonts. Please try again later.");
    }

    const fonts = response.data.result.map(item => `*${item.name}:*\n${item.result}`).join("\n\n");
    const resultText = `✨ *𝖥𝖠𝖭𝖢𝖸 𝖥𝖮𝖭𝖳 𝖦𝖤𝖭𝖤𝖱𝖠𝖳𝖤𝖣* ✨\n\n> ${fonts}\n\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ HACKLINK TECH.INC*`;

    await conn.sendMessage(from, { text: resultText }, { quoted: m });
  } catch (error) {
    console.error("❌ Error in fancy command:", error);
    reply("⚠️ An error occurred while fetching fonts.");
  }
});
