const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('@discordjs/builders');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
    	.setDMPermission(false)
        .setDescription('See my Ping')
        .setDescriptionLocalizations({
            de: 'Messages'
        }),
    async execute(interaction, client) {

        

        const botping = Math.round(client.ws.ping)

        // Create Embed
        let message = new EmbedBuilder()
        		.setTitle('Ping')
        		.setDescription('My ping ' + botping + ' ms')

        // Send Correct Response

        console.log(`[HUNDY BOT] [i] [TIME] [${new Date().toLocaleTimeString('en-US', { hour12: false})}] [DATE] [${new Date().toLocaleDateString('de-EU', { hour12: false })}] [INF] [USED COMMAND] [PING.JS]`/*[USERID] ${user.id} [CHANNELID] ${channel.id}*/);

        console.log(`[SERVER] [${interaction.guild.name}] [SERVERID] [${interaction.guild.id}]`)

        console.log(`[USERNAME] [${interaction.user.username}] [USERID] [${interaction.user.id}]`)

        console.log(`[CHANNELNAME] [${interaction.channel.name}] [CHANNELID] [${interaction.channel.id}] [CHANNELTYPE] [${interaction.channel.type}]`)
        
        await interaction.reply({ embeds: [message.toJSON()], fetchReply: false })
    },
};