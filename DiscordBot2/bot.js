const Discord = require('discord.js');
const client = new Discord.Client();


client.login('NDAzODQwNjAzNjkyOTkwNDY0.DUNJhg.9nyvq9e5fDTWN8J7tutii2wDToY');

client.on('ready', () => {
    console.log('Bot is online!');

});


client.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it needs to execute a command
    // for this script it will listen for messages that will start with `!`
    if (message.substring(0, 1) == '$') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
        var message = "pong";

        args = args.splice(1);

        switch(cmd) {
            // !ping
            case 'ping':
                client.sendMessage({ to: channelID, message: 'Pong!' });
                break;
            default:
                client.sendMessage({ to: channelID, message: 'Unknown command.' });
        }
    }
})