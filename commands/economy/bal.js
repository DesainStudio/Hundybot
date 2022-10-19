const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('bal')
        .setDMPermission(false)
        .setDescription('Sehe dein Konto an')
        .addUserOption(option =>
            option.setName('user')
                .setDescription('THE USER')
                .setRequired(true)
                ),
    async execute(interaction, client) {

        // Get User Option
        const useroption = interaction.option.getUserOption('user');

        // Read Money
        let map = await economy.get(useroption.id);
        const money = map.get("money")

        // Read Bank
        map = await economy.get(useroption.id);
        const bank = map.get("bank")

        // Read Kredit
        map = await economy.get(useroption.id);
        const kredit = map.get("kredit")

        // Create Embed
        const message = new EmbedBuilder()
            .setTitle(`Konto von ${useroption.id}`)
            .setDescription(`Money: \n \n ${money} \n \n Bank: \n \n ${bank} \n \n Kredit: \n \n ${kredit} \n \n Total: \n \n ${money + bank + kredit}`)
        console.log(`[HUNDY BOT] [i] [TIME] [${new Date().toLocaleTimeString('en-US', { hour12: false})}] [DATE] [${new Date().toLocaleDateString('de-EU', { hour12: false })}] [INF] [USED COMMAND] [BAL.JS]`);
        
        // Send Message
        await interaction.reply({ embeds: [message.toJSON()]});
    }
}