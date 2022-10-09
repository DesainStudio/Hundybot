const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('bal')
    	.setDMPermission(false)
        .setDescription('My Bal command'),
    async execute(interaction, client) {

        const money = await bals.get(interaction.user.id);

        const bankammount = await bank.get(interaction.user.id);

        // Create Embed
        let message = new EmbedBuilder()
        		.setTitle(`Konto von ${interaction.user.username}`)
                .setDescription(`Money: \n \n ${money} \n \n Bank: \n \n ${bankammount} \n \n Total: \n \n ${money + bankammount}`)

                console.log(`[HUNDY BOT] [i] [TIME] [${new Date().toLocaleTimeString('en-US', { hour12: false})}] [DATE] [${new Date().toLocaleDateString('de-EU', { hour12: false })}] [INF] [USED COMMAND] [BAL.JS]`/*[USERID] ${user.id} [CHANNELID] ${channel.id}*/);

                console.log(`[SERVER] [${interaction.guild.name}] [SERVERID] [${interaction.guild.id}]`)

                console.log(`[USERNAME] [${interaction.user.username}] [USERID] [${interaction.user.id}]`)

                console.log(`[CHANNELNAME] [${interaction.channel.name}] [CHANNELID] [${interaction.channel.id}] [CHANNELTYPE] [${interaction.channel.type}]`)

                await interaction.reply({ embeds: [message.toJSON()]})

    },
};