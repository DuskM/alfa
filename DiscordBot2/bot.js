const Discord = require('discord.js');
const client = new Discord.Client();

const auth = require('./auth.json')

client.login(auth.token)

client.on('ready', () => {
    console.log('Bot is online!');
});

client.on('message', msg => {
    // Our bot needs to know if it needs to execute a command
    // for this script it will listen for messages that will start with `$`
    var message = msg.content
    if (message.startsWith("$"))
{
    var args = message.substring(1).split(' ');
    var cmd = args[0];

    args = args.splice(1);

    switch (cmd) {
        // !ping
        case 'ping':
            msg.reply('Pong!');
            break;
        default:
            msg.reply('Unknown command.');
    }
}    else (message.startsWith(""))
{
    var args = message.substring(1).split(' ');
    var cmd = args[0];

    args = args.splice(1);

    switch (cmd) {
        // !ping
        case 'yare yare':
            msg.reply('daze');
            break;
        default:
            msg.reply('Unknown command.');
         }

    }
})