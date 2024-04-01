const { command, isPrivate, getJson } = require("../lib/");
const fetch = require("node-fetch");
const axios = require("axios");


/*
command(
    {
        pattern: "sps",
        fromMe: isPrivate,
        desc: "spotify song searcher",
        type: "search",
    },
    async (message, match) => {
        if (!match) return await message.sendMessage("*_Need Song Name_*");
var fek = await fetch(`https://vihangayt.me/search/spotify?q=${match}`)
var data = await fek.json();
        let txxt = `*spotify search results*\n\n`;
      
        for (let i=1; i<6; i++){
  txxt+=`
> *TITLE* : ${data.data[i].title}
> *DURATION* : ${data.data[i].duration}
> *URL* : ${data.data[i].url}\n`
        }
                   await message.client.sendMessage(message.jid,{ document :{ url: "https://www.mediafire.com/file/n1qjfxjgvt0ovm2/IMG-20240211-WA0086_%25281%2529.pdf/file" }, fileName: "𝗦𝗣𝗢𝗧𝗜𝗙𝗬 𝗦𝗘𝗔𝗥𝗖𝗛 𝗠𝗘𝗡𝗨" , mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", fileLength: "999999950", contextInfo: { externalAdReply: {
title: "𝗤𝗨𝗘𝗘𝗡 𝗡𝗘𝗭𝗨𝗞𝗢",
body: "",
sourceUrl: "",
mediaUrl: "",
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: false,
thumbnailUrl: "https://i.imgur.com/PRKcWJ0.jpeg" }}, caption: (txxt)}, {quoted: message })
    }
    );
*/

command(
    {
        pattern: "gitinfo",
        fromMe: isPrivate,
        desc: "github user details",
        type: "search",
    },
    async (message, match) => {
        if (!match) return await message.sendMessage("*_Need Github UserName_*");
var GHuserInfo = await axios
          .get(`https://api.github.com/users/${match}`)
          .then((response) => response.data)
          .catch((error) => {
            console.log(error);
          });
        let GhUserPP = GHuserInfo.avatar_url;
        let resText4 = `\n*𝐆𝐈𝐓𝐇𝐔𝐁 𝐔𝐒𝐄𝐑 𝐈𝐍𝐅𝐎*

*Username* : ${GHuserInfo.login}
*Name* : ${GHuserInfo.name}
*Bio* : ${GHuserInfo.bio}

> *ID* : ${GHuserInfo.id}
> *Profile URL* : ${GHuserInfo.html_url}
> *Type* : ${GHuserInfo.type}
> *Company* : WhatsApp Bot
> *Blog* : ${GHuserInfo.blog}
> *Location* : ${GHuserInfo.location}
> *Email* : ${GHuserInfo.email}
> *Twitter* : ${GHuserInfo.twitter_username}
> *Public Repos* : ${GHuserInfo.public_repos}
> *Public Gists* : ${GHuserInfo.public_gists}
> *Followers* : ${GHuserInfo.followers}
> *Following* : ${GHuserInfo.following}
> *Account Created At* : ${GHuserInfo.created_at}
> *Last Updated At* : ${GHuserInfo.updated_at}

𝗤𝗨𝗘𝗘𝗡 𝗡𝗘𝗭𝗨𝗞𝗢`;

        await message.client.sendMessage(message.jid, {image: {url: GhUserPP, mimetype: "image/jpeg" }, contextInfo: { externalAdReply: {
title: "𝗤𝗨𝗘𝗘𝗡 𝗡𝗘𝗭𝗨𝗞𝗢",
body: "𝙂𝙞𝙩𝙝𝙪𝙗 𝙐𝙨𝙚𝙧 𝙄𝙣𝙛𝙤",
sourceUrl: "",
mediaUrl: "",
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: false,
thumbnailUrl: "https://i.imgur.com/PRKcWJ0.jpeg" }}, caption: (resText4)},{quoted:message})
    }
    );


command(
    {
        pattern: "ig",
        fromMe: isPrivate,
        desc: "instagram details",
        type: "search",
    },
    async (message, match) => {
        if (!match) return await message.sendMessage("*_Need IG Username_*");
var {result} = await getJson(`https://levanter.onrender.com/ig?q=${match}`)
const { name, username, avatar, posts, following, followers, description } =
			result
await message.client.sendMessage(message.jid, { image:{url: avatar} ,  mimetype:"image/jpeg", contextInfo: { externalAdReply: {
title: "𝗤𝗨𝗘𝗘𝗡 𝗡𝗘𝗭𝗨𝗞𝗢",
body: "𝙄𝙂 𝙙𝙚𝙩𝙖𝙞𝙡𝙨",
sourceUrl: "",
mediaUrl: "",
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: false,
thumbnailUrl: "https://i.imgur.com/PRKcWJ0.jpeg" }}, caption: `\n*INSTAGRAM DETAILS*\n\n> *USERNAME* : ${username}\n> *NAME* : ${name}\n> *BIO* : ${description}\n> *POSTS* : ${posts}\n> *FOLLOWERS* : ${followers}\n> *FOLLOWING* : ${following}\n\n𝗤𝗨𝗘𝗘𝗡 𝗡𝗘𝗭𝗨𝗞𝗢`}, {quoted: message });
    }
    );
