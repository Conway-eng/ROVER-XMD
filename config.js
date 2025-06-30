// POWERED BY HACKLINK TECH.INC
require('dotenv').config();

const convertToBool = (text) => text === 'true';

module.exports = {
  SESSION_ID: process.env.SESSION_ID,
  AUTO_STATUS_SEEN: convertToBool(process.env.AUTO_STATUS_SEEN),
  AUTO_STATUS_REPLY: convertToBool(process.env.AUTO_STATUS_REPLY),
  AUTO_STATUS_REACT: convertToBool(process.env.AUTO_STATUS_REACT),
  AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG,
  WELCOME: convertToBool(process.env.WELCOME),
  ADMIN_EVENTS: convertToBool(process.env.ADMIN_EVENTS),
  ANTI_LINK: convertToBool(process.env.ANTI_LINK),
  MENTION_REPLY: convertToBool(process.env.MENTION_REPLY),
  MENU_IMAGE_URL: process.env.MENU_IMAGE_URL,
  PREFIX: process.env.PREFIX,
  BOT_NAME: process.env.BOT_NAME,
  STICKER_NAME: process.env.STICKER_NAME,
  CUSTOM_REACT: convertToBool(process.env.CUSTOM_REACT),
  CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS,
  DELETE_LINKS: convertToBool(process.env.DELETE_LINKS),
  OWNER_NUMBER: process.env.OWNER_NUMBER,
  OWNER_NAME: process.env.OWNER_NAME,
  DESCRIPTION: process.env.DESCRIPTION,
  ALIVE_IMG: process.env.ALIVE_IMG,
  LIVE_MSG: process.env.LIVE_MSG,
  READ_MESSAGE: convertToBool(process.env.READ_MESSAGE),
  AUTO_REACT: convertToBool(process.env.AUTO_REACT),
  ANTI_BAD: convertToBool(process.env.ANTI_BAD),
  MODE: process.env.MODE,
  ANTI_LINK_KICK: convertToBool(process.env.ANTI_LINK_KICK),
  AUTO_VOICE: convertToBool(process.env.AUTO_VOICE),
  AUTO_STICKER: convertToBool(process.env.AUTO_STICKER),
  AUTO_REPLY: convertToBool(process.env.AUTO_REPLY),
  ALWAYS_ONLINE: convertToBool(process.env.ALWAYS_ONLINE),
  PUBLIC_MODE: convertToBool(process.env.PUBLIC_MODE),
  AUTO_TYPING: convertToBool(process.env.AUTO_TYPING),
  READ_CMD: convertToBool(process.env.READ_CMD),
  DEV: process.env.DEV,
  ANTI_VV: convertToBool(process.env.ANTI_VV),
  ANTI_DEL_PATH: process.env.ANTI_DEL_PATH,
  AUTO_RECORDING: convertToBool(process.env.AUTO_RECORDING)
};
