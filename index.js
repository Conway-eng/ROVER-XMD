// This is a minimal example, please replace this with the actual index.js content if needed.
const antigroupmention = require('./plugins/antigroupmention');
conn.ev.on('messages.upsert', async(mek) => {
  const message = mek.messages[0];
  antigroupmention.execute(message, conn);
});
