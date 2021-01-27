const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on("ready", () => {
    console.log('connecté!')

})

bot.on('message', message =>{
    if(message.content.startsWith('!ping')){
        message.channel.send('pong!')
    };
})
bot.login(process.env.BOT_TOKEN)
