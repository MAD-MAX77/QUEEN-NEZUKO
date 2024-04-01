const { command, isPrivate, getBuffer, getJson } = require("../lib/");
const config = require("../config");
command(
    {
        pattern: "emix",
        fromMe: isPrivate,
        desc: "mix emojis",
        type: "converter",
    },
    async (message, match) => {
        if (!match) return await message.sendMessage("*_emojis tha myre_*\n*_eg:- emix 🙄😌_*");
try {
        var { result } = await getJson(`https://levanter.onrender.com/emix?q=${match}`);
        let buff = await getBuffer(result);
        await message.sendMessage(
      buff,
      { packname: config.STICKER_DATA.split(";")[0], author: config.STICKER_DATA.split(";")[1], contextInfo: { externalAdReply: {
title: "𝗤𝗨𝗘𝗘𝗡 𝗡𝗘𝗭𝗨𝗞𝗢",
body: "𝙚𝙢𝙤𝙟𝙞 𝙢𝙞𝙭𝙚𝙙",
sourceUrl: "",
mediaUrl: "",
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: false,
thumbnailUrl: "https://i.imgur.com/sPBOwto.jpeg" }} },
      "sticker"
    );
    } catch (error) {
        console.error(error);
    }
    }
    );
