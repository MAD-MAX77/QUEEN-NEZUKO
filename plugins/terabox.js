const { command, isPrivate, getJson } = require("../lib/");
const { CAPTION } = require("../config");
const X = require("../config");

command(
    {
        pattern: "tbox",
        fromMe: isPrivate,
        desc: "terabox Downloader",
        type: "downloader",
    },
    async (message, match) => {
    	match = match || message.reply_message.text
   if (!match)return message.reply(`*_Need Terabox Link_*\n*Nb:- Please provide link less than 100MB*`)
let zenitsu = await getJson(`https://terabox-app.vercel.app/api?data=${match}`);
return await message.sendFromUrl(zenitsu.direct_link, { caption: (X.CAPTION)})
});

//zenitsu 😦🔞
