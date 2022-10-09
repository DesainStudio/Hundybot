const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('@discordjs/builders');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('userinfo')
    	.setDMPermission(false)
        .setDescription('See from a User a info!')
        .addUserOption(option =>
            option.setName('user')
                .setDescription('THE USER')
                .setRequired(true)),
    async execute(interaction, client) {

        const user = interaction.options.getUser("user")

        // Create Embed
        let message = new EmbedBuilder()
        		.setTitle('Userinfo')
        		.setDescription(`User: ${user.username} \n User: ${user.id} \n Acc Create: ${user.Date}`)

                console.log(`[HUNDY BOT] [i] [TIME] [${new Date().toLocaleTimeString('en-US', { hour12: false})}] [DATE] [${new Date().toLocaleDateString('de-EU', { hour12: false })}] [INF] [USED COMMAND] [USERINFO.JS]`/*[USERID] ${user.id} [CHANNELID] ${channel.id}*/);

                console.log(`[SERVER] [${interaction.guild.name}] [SERVERID] [${interaction.guild.id}]`)

                console.log(`[USERNAME] [${interaction.user.username}] [USERID] [${interaction.user.id}]`)

                console.log(`[CHANNELNAME] [${interaction.channel.name}] [CHANNELID] [${interaction.channel.id}] [CHANNELTYPE] [${interaction.channel.type}]`)

                await interaction.reply({ embeds: [message.toJSON()], fetchReply: false})

    },
};