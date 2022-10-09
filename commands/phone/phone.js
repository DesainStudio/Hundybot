const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('phone')
    	.setDMPermission(false)
        .setDescription('My Bal command')
        .setDescriptionLocalizations({
            de: 'Bal'
        }),
    async execute(interaction, client) {

        let row = new ActionRowBuilder()
			.addComponents(
				new ButtonBuilder()
					.setLabel('UPDATE')
                    .setCustomId('phone')
					.setStyle(ButtonStyle.Secondary),
			);

        // Create Embed
        let message = new EmbedBuilder()
        		.setTitle(`Konto von ${interaction.user.username}`)
                .setDescription(`Test w`)

                console.log(`[HUNDY BOT] [i] [TIME] [${new Date().toLocaleTimeString('en-US', { hour12: false})}] [DATE] [${new Date().toLocaleDateString('de-EU', { hour12: false })}] [INF] [USED COMMAND] [PHONE.JS]`/*[USERID] ${user.id} [CHANNELID] ${channel.id}*/);

                console.log(`[SERVER] [${interaction.guild.name}] [SERVERID] [${interaction.guild.id}]`)

                console.log(`[USERNAME] [${interaction.user.username}] [USERID] [${interaction.user.id}]`)

                console.log(`[CHANNELNAME] [${interaction.channel.name}] [CHANNELID] [${interaction.channel.id}] [CHANNELTYPE] [${interaction.channel.type}]`)

                await interaction.reply({ embeds: [message.toJSON()], components: [row] })

    },
};