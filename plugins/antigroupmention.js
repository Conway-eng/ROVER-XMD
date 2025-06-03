module.exports = {
  name: 'antigroupmention',
  description: 'Warns or kicks users who mention group links in their WhatsApp status.',
  async execute(m, conn) {
    try {
      if (m.key.remoteJid !== 'status@broadcast') return;

      const statusText = m?.message?.conversation || '';
      const groupPattern = /chat\.whatsapp\.com\/[\w]+/i;

      if (groupPattern.test(statusText)) {
        const user = m.key.participant;
        const groupList = await conn.groupFetchAllParticipating();
        const groupNames = Object.values(groupList).map(g => g.subject.toLowerCase());

        const mentionedAnyGroup = groupNames.some(name => statusText.toLowerCase().includes(name));
        if (mentionedAnyGroup) {
          await conn.sendMessage(user, { text: '⚠️ You have mentioned a group in your status. Please remove it or risk being removed from the group.' });
        }
      }
    } catch (e) {
      console.error('AntiGroupMention Plugin Error:', e);
    }
  }
};
