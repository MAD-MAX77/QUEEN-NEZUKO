const { command, isPrivate } = require("../lib/");
const X = require("../config");
const { SUDO } = require("../config");
command(
  { pattern: "getsudo ?(.*)", 
    fromMe: isPrivate, 
    desc: "shows sudo numbers", 
    type: "heroku" 
  },
  async (message, match, mm) => {
    let zenitsu= X.SUDO
message.reply("```" + `SUDO number are : ${zenitsu}` + "```")
  }
);

// ub God zenitsu🌀
