const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('@discordjs/builders');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('userinfo')
    	.setDMPermission(false)
        .setDescription('See from a User a info!')
        .addUserOption(option =>
            option.setName('user')
                .setDescription('User')
                .setRequired(true)),
    async execute(interaction, client) {

        // Get Option User
        const user = interaction.options.getUser('user');

        // Create Embed
        const message = new EmbedBuilder()
            .setTitle(`User Info von ${user.username}`)
            .setDescription(`Username: ${interaction.user.username} \n \n User ID: ${interaction.user.id} \n \n Acc Erstellt: ${interaction.user.username}`)
        console.log(`[HUNDY BOT] [i] [TIME] [${new Date().toLocaleTimeString('en-US', { hour12: false})}] [DATE] [${new Date().toLocaleDateString('de-EU', { hour12: false })}] [INF] [USED COMMAND] [USERINFO.JS]`);

        // Send Message
        await interaction.reply({ embeds: [message]});
    },
};